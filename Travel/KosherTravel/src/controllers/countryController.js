import Country from '../models/country'

export const createCountry = async (req, res) => {
    try {
        const country = new Country(req.body);
        await country.save();
        res.status(201).send(country);
    } catch (error) {
        res.status(400).send(error);
    }
};

export const getCountries = async (req, res) => {
    try {
        const countries = await Country.find();
        res.status(200).send(countries);
    } catch (error) {
        res.status(500).send(error);
    }
};

export const getCountry = async (req, res) => {
    try {
        const country = await Country.findById(req.params.id);
        if (!country) {
            return res.status(404).send();
        }
        res.status(200).send(country);
    } catch (error) {
        res.status(500).send(error);
    }
};

export const updateCountry = async (req, res) => {
    try {
        const country = await Country.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!country) {
            return res.status(404).send();
        }
        res.status(200).send(country);
    } catch (error) {
        res.status(400).send(error);
    }
};

export const deleteCountry = async (req, res) => {
    try {
        const country = await Country.findByIdAndDelete(req.params.id);
        if (!country) {
            return res.status(404).send();
        }
        res.status(200).send(country);
    } catch (error) {
        res.status(500).send(error);
    }
};
