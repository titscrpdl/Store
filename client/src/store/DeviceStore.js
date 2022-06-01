import {makeAutoObservable} from "mobx";

export default class DeviceStore {
    constructor() {
        this._types = [
            {id:1, name:'Шубы из кёрли'},
            {id:3, name:'Шубы из шерст'},
            {id:4, name:'Шубы из мутона'},
            {id:5, name:'Шубы из астрагана'},
            

        ]
        this._brands = [
            {id:1, name: "LG"},
            {id:2, name: "Nestlea"},
            {id:3, name: "Danone"},
            {id:4, name: "Kraft"},

        ]
        this._devices = [
            {id:1, name:"ШУБА ИЗ ОВЕЧЬЕЙ ШЕРСТИ", price: 22000, rating: 5, img: `https://main-cdn.sbermegamarket.ru/big2/hlr-system/926/768/650/211/183/3/100030584276b0.jpg`},
            {id:2, name:"ШУБА ИЗ ОВЕЧЬЕЙ ШЕРСТИ", price: 22000, rating: 5, img: `https://main-cdn.sbermegamarket.ru/big2/hlr-system/926/768/650/211/183/3/100030584276b0.jpg`},
            {id:3, name:"ШУБА ИЗ ОВЕЧЬЕЙ ШЕРСТИ", price: 22000, rating: 5, img: `https://main-cdn.sbermegamarket.ru/big2/hlr-system/926/768/650/211/183/3/100030584276b0.jpg`},
            {id:4, name:"ШУБА ИЗ ОВЕЧЬЕЙ ШЕРСТИ", price: 22000, rating: 5, img: `https://main-cdn.sbermegamarket.ru/big2/hlr-system/926/768/650/211/183/3/100030584276b0.jpg`},
            {id:5, name:"ШУБА ИЗ ОВЕЧЬЕЙ ШЕРСТИ", price: 22000, rating: 5, img: `https://main-cdn.sbermegamarket.ru/big2/hlr-system/926/768/650/211/183/3/100030584276b0.jpg`},
            {id:6, name:"ШУБА ИЗ ОВЕЧЬЕЙ ШЕРСТИ", price: 22000, rating: 5, img: `https://main-cdn.sbermegamarket.ru/big2/hlr-system/926/768/650/211/183/3/100030584276b0.jpg`},


        ]
        this._selectedType = {}
        this._selectedBrand = {}
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }
    setBrands(brands) {
        this._brands = brands
    }
    setDevices(devices) {
        this._devices = devices
    }
    setSelectedType(type){
        this._selectedType = type
    }
    setSelectedBrand(brand){
        this._selectedBrand = brand
    }


    get types() {
        return this._types
    }
    get brands() {
        return this._brands
    }
    get devices() {
        return this._devices
    }
    get selectedType(){
        return this._selectedType
    }
    get selectedBrand(){
        return this._selectedBrand
    }
}