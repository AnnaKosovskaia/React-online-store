const { Brand } = require('../models/models');
const ApiError = require('../error/ApiError');

class BrandController {
    async create(req, res) {
        const { name } = req.body;
        const brand = await Brand.create({ name });
        return res.json(brand)
    }

    async getAll(req, res) {
        const brands = await Brand.findAll();
        return res.json(brands)
    }

    async delete(req, res) {
        const oldBrands = await Brand.findAll();
        const deleted = oldBrands.find(brand => brand.name === req.params.name)
        if (deleted) {
            const brands = oldBrands.filter(p => JSON.stringify(p) !== JSON.stringify(deleted));
            return res.json(brands)
        } else {
            return res.status(404).json({ message: 'hh' })
        }

     
    }
}

module.exports = new BrandController();
