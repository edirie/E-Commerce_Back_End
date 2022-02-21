const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try{
    const getAllTags = await Tag.findAll({
      include: {
        model: Product,
      }
    });
    res.status(200).json(getAllTags);      
  }
  catch(err){
    console.log(err)
    res.status(500).json(err)
  }
});


router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try{
    const getOneTag = await Tag.findOne({
      where:{
        id: req.params.id
      },
      include:{
        model:Product
      }
    })
    res.status(200).json(getOneTag)
  }
  catch(err){
    console.log(err)
    res.status(500).json(err)
  }
});

router.post('/', async (req, res) => {
  // create a new tag
  try{
    const newTag = await Tag.create({
      tag_name: req.body.tag_name

    })
    res.status(200).json(newTag)
  }
  catch(err){
    console.log(err),
    json.status(500).json(err)
  }
});


router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  try{
    const updateTag = await Tag.update(req.body,{
      where:{
        id: req.params.id
      }
    })
    res.status(200).json(updateTag)
  }
  catch(err){
    console.log(err)
    res.status(500).json(err)
  }
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  try{
    const deleteTag = await Tag.destroy({
      where:{
        id:req.params.id
      }
    })
    res.status(200).json(deleteTag)
  }
  catch(err){
    console.log(err);
    res.status(500).json(err)
  }
});

module.exports = router;
