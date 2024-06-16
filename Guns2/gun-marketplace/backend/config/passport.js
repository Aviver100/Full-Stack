// backend/config/passport.js
import LocalStrategy from 'passport-local';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import { Strategy as FacebookStrategy } from 'passport-facebook';
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import User from '../models/User.js';

export default function(passport) {
  passport.use(new LocalStrategy((username, password, done) => {
    User.findOne({ username }, (err, user) => {
      if (err) throw err;
      if (!user) return done(null, false, { message: 'User not found' });

      bcrypt.compare(password, user.password, (err, isMatch) => {
        if (err) throw err;
        if (isMatch) return done(null, user);
        else return done(null, false, { message: 'Incorrect password' });
      });
    });
  }));

  passport.use(new GoogleStrategy({
    clientID: 'YOUR_GOOGLE_CLIENT_ID',
    clientSecret: 'YOUR_GOOGLE_CLIENT_SECRET',
    callbackURL: '/auth/google/callback'
  }, (token, tokenSecret, profile, done) => {
    User.findOrCreate({ googleId: profile.id }, (err, user) => {
      return done(err, user);
    });
  }));

  passport.use(new FacebookStrategy({
    clientID: 'YOUR_FACEBOOK_CLIENT_ID',
    clientSecret: 'YOUR_FACEBOOK_CLIENT_SECRET',
    callbackURL: '/auth/facebook/callback'
  }, (accessToken, refreshToken, profile, done) => {
    User.findOrCreate({ facebookId: profile.id }, (err, user) => {
      return done(err, user);
    });
  }));

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
      done(err, user);
    });
  });
};
