const fastify = require('fastify');
const categories = require('../model/categories.js');
const { v4:uuidv4 } = require('uuid')


const getAllCategories = (req, reply) => {
    reply.send(categories)
}

const getCategoryById = (req, reply) => {
    const { id } = req.params;
    const category = categories.categoriesList.find(category => category.id === id);

    reply.send(category);
}

const addCategory = (req, reply) => {
    const { name, label, type } = req.body;
    const category = {
        id: uuidv4(),
        name: name,
        label: label,
        type: type
    }
    categories.categoriesList.push(category);

    reply.code(201).send(category);
}

const deleteCategory = (req, reply) => {
        const { id } = req.params;
        const categoriesUpdated = categories.categoriesList.filter(cat => cat.id !== id)
        categories.categoriesList = categoriesUpdated;

    reply.code(204).send();
}

module.exports = {
    getAllCategories,
    getCategoryById,
    addCategory,
    deleteCategory
}