import { defineStore } from "pinia";

export const useAppStore = defineStore("app", {
  state: () => {
    return {
      affixHeight: 310, // header（默认设置 'top-submenus-height:50px'）+ BannerImg
      bannerImgHeight: 260,
      bannerImg: "",
    };
  },
  getters: {
    affixContainerHeightPx(state) {
      return Number(state.affixHeight) + "px";
    },
    bannerImgHeightPx(state) {
      return Number(state.bannerImgHeight) + "px";
    },
  },
  actions: {
    setAffixHeight(affixHeight) {
      this.affixHeight = affixHeight;
    },
    setBannerImgHeight(bannerImgHeight) {
      this.bannerImgHeight = bannerImgHeight;
    },
    setBannerImg(bannerImg) {
      // this.bannerImg = new URL(bannerImg, import.meta.url).href; // assets/images 文件下
      this.bannerImg = bannerImg;
    },
  },
});
