const{
    BrandListService,
    CategoryListService,
    SliderListService,
    ListByBrandService,
    ListByCategoryService,
    ListBySimilarService,
    ListByKeywordService,
    ListByRemarkService,
    DetailService,
    ReviewListService
} = require("../services/ProductService")

exports.ProductBrandList = async(req, res)=>{
    let result = await BrandListService();
    return res.status(200).json(result);
}

exports.ProductCategoryList = async(req, res)=>{
    let result = await CategoryListService();
    return res.status(200).json(result);
}

exports.ProductSliderList = async(req, res)=>{
    let result = await SliderListService();
    return res.status(200).json(result);
}



exports.ProductListByBrand = async(req, res)=>{
    let result = await ListByBrandService(req);
    return res.status(200).json(result);
}

exports.ProductListByCategory = async(req, res)=>{
    let result = await ListByCategoryService(req);
    return res.status(200).json(result);
}

exports.ProductListByRemark = async(req, res)=>{
    let result = await ListByRemarkService(req);
    return res.status(200).json(result);
}



exports.ProductListBySimilar = async(req, res)=>{
    let result = await ListBySimilarService();
    return res.status(200).json(result);
}

exports.ProductListByKeyword = async(req, res)=>{
    let result = await ListByKeywordService();
    return res.status(200).json(result);
}

exports.ProductDetail = async(req, res)=>{

}

exports.ProductReviewList = async(req, res)=>{

}