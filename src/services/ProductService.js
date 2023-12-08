const BrandModel = require("../models/BrandModel")
const CategoryModel = require("../models/CategoryModel")
const ProductSliderModel = require("../models/ProductSliderModel")
const ProductModel = require("../models/ProductModel")
const ProductDetailModel = require("../models/ProductDetailModel")
const ReviewModel = require("../models/ReviewModel")

const mongoose = require("mongoose");
const ObjectID = mongoose.Types.ObjectId;

const BrandListService = async()=>{
    try {
        let data = await BrandModel.find();
        return {status: "success", data: data}
    } catch (error) {
        return {status: "fail", data: error}.toString()
    }
}

const CategoryListService = async()=>{
    try {
        let data = await CategoryModel.find();
        return {status: "success", data: data}
    } catch (error) {
        return {status: "fail", data: error}.toString()
    }
}

const SliderListService = async()=>{
    try {
        let data = await ProductSliderModel.find();
        return {status: "success", data: data}
    } catch (error) {
        return {status: "fail", data: error}.toString()
    }
}



const ListByBrandService = async(req)=>{
    try {
        let BrandID = new ObjectID(req.params.BrandID) //Here we convert BrandID string to object using mongoose

        let MatchStage = {$match:{brandID:BrandID}}
        let JoinWithBrandStage = {$lookup:{from:"brands",localField:"brandID",foreignField:"_id",as:"brand"}}
        let JoinWithCategoryStage = {$lookup:{from:"categories",localField:"categoryID",foreignField:"_id",as:"categorie"}}
        let UnwindBrandStage = {$unwind:"$brand"} //Here we convert brands array to object using unwind
        let UnwindCategoryStage = {$unwind:"$categorie"}
        let ProjectionStage = {$project:{"brandID":0, "categoryID":0, "brand._id":0, "categorie._id":0}}

        let data = await ProductModel.aggregate([
            MatchStage,
            JoinWithBrandStage,
            JoinWithCategoryStage,
            UnwindBrandStage,
            UnwindCategoryStage,
            ProjectionStage
        ])

        return {status: "success", data: data}
    } catch (error) {
        return {status: "fail", data: error}.toString()
    }
}

const ListByCategoryService = async(req)=>{
    try {
        let CategoryID = new ObjectID(req.params.CategoryID) //Here we convert BrandID string to object using mongoose

        let MatchStage = {$match:{categoryID:CategoryID}}
        let JoinWithBrandStage = {$lookup:{from:"brands",localField:"brandID",foreignField:"_id",as:"brand"}}
        let JoinWithCategoryStage = {$lookup:{from:"categories",localField:"categoryID",foreignField:"_id",as:"categorie"}}
        let UnwindBrandStage = {$unwind:"$brand"} //Here we convert brands array to object using unwind
        let UnwindCategoryStage = {$unwind:"$categorie"}
        let ProjectionStage = {$project:{"brandID":0, "categoryID":0, "brand._id":0, "categorie._id":0}}

        let data = await ProductModel.aggregate([
            MatchStage,
            JoinWithBrandStage,
            JoinWithCategoryStage,
            UnwindBrandStage,
            UnwindCategoryStage,
            ProjectionStage
        ])

        return {status: "success", data: data}
    } catch (error) {
        return {status: "fail", data: error}.toString()
    }
}

const ListByRemarkService = async(req)=>{
    try {
        let Remark = req.params.Remark

        let MatchStage = {$match:{remark:Remark}}
        let JoinWithBrandStage = {$lookup:{from:"brands",localField:"brandID",foreignField:"_id",as:"brand"}}
        let JoinWithCategoryStage = {$lookup:{from:"categories",localField:"categoryID",foreignField:"_id",as:"categorie"}}
        let UnwindBrandStage = {$unwind:"$brand"} //Here we convert brands array to object using unwind
        let UnwindCategoryStage = {$unwind:"$categorie"}
        let ProjectionStage = {$project:{"brandID":0, "categoryID":0, "brand._id":0, "categorie._id":0}}

        let data = await ProductModel.aggregate([
            MatchStage,
            JoinWithBrandStage,
            JoinWithCategoryStage,
            UnwindBrandStage,
            UnwindCategoryStage,
            ProjectionStage
        ])

        return {status: "success", data: data}
    } catch (error) {
        return {status: "fail", data: error}.toString()
    }
}



const ListBySimilarService = async()=>{

}

const ListByKeywordService = async()=>{

}

const DetailService = async()=>{

}

const ReviewListService = async()=>{

}

module.exports={
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
}
