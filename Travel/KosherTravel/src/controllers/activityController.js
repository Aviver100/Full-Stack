import express from 'express';
import Activity from '../models/activity.js'; // Adjust path as necessary

// Create a new activity
export const createActivity = async (req, res) => {
    try {
        const activity = new Activity(req.body);
        await activity.save();
        res.status(201).send(activity);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Get all activities
export const getActivities = async (req, res) => {
    try {
        const activities = await Activity.find();
        res.status(200).send(activities);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Get a single activity by ID
export const getActivity = async (req, res) => {
    try {
        const activity = await Activity.findById(req.params.id);
        if (!activity) {
            return res.status(404).send();
        }
        res.status(200).send(activity);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Update an activity by ID
export const updateActivity = async (req, res) => {
    try {
        const activity = await Activity.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
        if (!activity) {
            return res.status(404).send();
        }
        res.status(200).send(activity);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Delete an activity by ID
export const deleteActivity = async (req, res) => {
    try {
        const activity = await Activity.findByIdAndDelete(req.params.id);
        if (!activity) {
            return res.status(404).send();
        }
        res.status(200).send(activity);
    } catch (error) {
        res.status(500).send(error);
    }
};
