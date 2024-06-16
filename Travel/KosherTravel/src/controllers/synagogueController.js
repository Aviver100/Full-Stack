import Synagogue from '../models/synagogue';

export const createSynagogue = async (req, res) => {
    try {
        const synagogue = new Synagogue(req.body);
        await synagogue.save();
        res.status(201).send(synagogue);
    } catch (error) {
        res.status(400).send(error);
    }
};

export const getSynagogues = async (req, res) => {
    try {
        const synagogues = await Synagogue.find();
        res.status(200).send(synagogues);
    } catch (error) {
        res.status(500).send(error);
    }
};

export const getSynagogue = async (req, res) => {
    try {
        const synagogue = await Synagogue.findById(req.params.id);
        if (!synagogue) {
            return res.status(404).send();
        }
        res.status(200).send(synagogue);
    } catch (error) {
        res.status(500).send(error);
    }
};

export const updateSynagogue = async (req, res) => {
    try {
        const synagogue = await Synagogue.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!synagogue) {
            return res.status(404).send();
        }
        res.status(200).send(synagogue);
    } catch (error) {
        res.status(400).send(error);
    }
};

export const deleteSynagogue = async (req, res) => {
    try {
        const synagogue = await Synagogue.findByIdAndDelete(req.params.id);
        if (!synagogue) {
            return res.status(404).send();
        }
        res.status(200).send(synagogue);
    } catch (error) {
        res.status(500).send(error);
    }
};
