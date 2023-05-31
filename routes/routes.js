const {getAllCategories, getCategoryById, addCategory, deleteCategory  } = require('../controllers/categoriesController');

const category = {
    type: 'object',
    properties: {
        id: {type: 'string'},
        name: {type: 'string'},
        label: {type: 'string'},
        type: {type: 'string'}
    }
}

const getAllCategoriesOpt = {
    schema: {
        response: {
            200: {
                type: 'object',
                properties: {
                    categoriesList: {type: 'array'},
                    items: category
                }
            }
        }
    },
    handler: getAllCategories
}

const getCategoryByIdOpt = {
    schema: {
        response: {
            200: category
            }
        },
    handler: getCategoryById
}

const addCategoriesOpt = {
    schema: {
        body: {
            type: 'object',
            required: ['name', 'label', 'type'],
            properties: {
                name: {type: 'string'},
                label: {type: 'string'},
                type: {type: 'string'}
            }
        },
        response: {
            201: category
        }
    },
    handler: addCategory
}

const deleteCategoryOpt = {
    schema: {
        response: {
            204: {
                type: 'object',
                properties: {
                    message: { type: 'string'}
                }
            }
        }
    },
    handler: deleteCategory
}

const categoriesRoutes = (fastify, options, done) => {
    fastify.get("/categories", getAllCategoriesOpt);
    fastify.get("/categories/:id", getCategoryByIdOpt);
    fastify.post("/categories", addCategoriesOpt);
    fastify.delete("/categories/:id", deleteCategoryOpt)

    done();
}

module.exports = categoriesRoutes;