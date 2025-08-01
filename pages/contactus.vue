<template>
  <div class="contactus">
    <div class="mb-[100px]">
      <div class="contactus__header mb-[35px]">
        <h4>How to Find Us</h4>
      </div>
      <div class="sempo-wrap flex mb-[52px]">
        <div class="mr-[39px]">
          <h4>Sempo neo ikonio perama</h4>
          <h4 class="mb-[29px]">18863 Greece</h4>
          <div class="i-box">
            <div class="flex items-center mb-[20px]">
              <i class="i-img i-img__phone"></i>
              <span>+30 210 4099100</span>
            </div>
            <div class="flex items-center">
              <i class="i-img i-img__email"></i>
              <span>pr@pct.com.gr</span>
            </div>
          </div>
        </div>
  
        <div class="flex-1 flex items-center">
          <div class="i-box flex justify-between flex-1">
            <div class="flex items-center flex-1" v-for="item in 3">
              <i class="i-img i-img__mark"></i>
              <span class="text-b">Driving Instructions from Piraeus Center to PCT S.A.</span>
            </div>
          </div>
        </div>
  
      </div>
      <div class="contactus__cardbox" >
        <CardInfo class="contactus__card" :isActive="selectedCard === item" :title="'Vehicle & Heavy Machinery Engineer'" :date="'05.04.2025'" v-for="item in 4" :key="item" @click="handleClick(item)">
          <template #extraIntro>
            <div>
              <p class="mb-[41px] txt-wt">
                Media can address all their questions, requests for interviews to PCT's Public Relations department
              </p>
              <div class="i-box flex justify-between">
                <div class="flex items-center">
                  <i class="i-img i-img__phone"></i>
                  <span>+30 210 4099100</span>
                </div>
                <div class="flex items-center">
                  <i class="i-img i-img__email"></i>
                  <span>pr@pct.com.gr</span>
                </div>
              </div>
            </div>
          </template>
        </CardInfo>
      </div>
    </div>

    <div>
      <div class="contactus__header mb-[34px]">
        <h4>Request for a Visit</h4>
      </div>
      <div class="contactus__content mb-[68px]">
        <p class="">
          PCT focuses on hosting visitors who are directly related to PCT and her (operational) business.
        </p>
        <p class="text-b">
          PCT relations can send requests, preferably by e-mail, to Commercial Department 
        </p> 
      </div>
      <div class="map-box">
        <div class="i-box flex items-center mb-[30px]">
          <h6>VIEW LARGER MAP</h6>
          <i class="i-img i-img__map"/>
        </div>
        <div class="map-img">
          <img :src="bgContactus" alt="">
        </div>
      </div>
    </div>


  </div>
</template>

<script setup >
import bgContactus from '~/assets/images/bg-contactus.png';

const selectedCard = ref(6)
const handleClick = (item) => {
  selectedCard.value = item
}

</script>

<style lang="scss" scoped>
.contactus{
  .text-b{
    color: rgba(10, 71, 153, 1);
  }
  .txt-wt{
    font-weight: 800;
    font-size: 24px;
  }
  .i-box{
    .i-img{
      display: inline-block;
      width: 30px;
      height: 30px;
      margin-right: 8px;
      &__phone{
        background: url("~/assets/images/i-iphone.png") no-repeat;
        background-size: cover;
      }
      &__email{
        background: url("~/assets/images/i-email.png") no-repeat;
        background-size: cover;
      }
      &__mark{
        width: 54px;
        height: 54px;
        margin-right: 12px;
        background: url("~/assets/images/i-mark.png") no-repeat;
        background-size: cover;
      }
      &__map{
        width: 36px;
        height: 36px;
        margin-left: 16px;
        background: url("~/assets/images/i-map.png") no-repeat;
        background-size: cover;
      }
    }
  }

  .sempo-wrap{
    background: #FFFFFF;
    border-radius: 15px;
    border: 1px solid rgba(223,223,223,0.7);
    padding: 30px 30px 39px 25px;
    h4{
      font-weight: 800;
      font-size: 24px;
      color: #262729;
    }
  }
  
  .map-box{
    h6{
      font-size: 30px;
      color: #333333;
    }
    /* .map-img{
      width: 100%;
      img{
        width: 100%;
      }
    } */
  }

  &__header{
    font-size: 50px;
    color: #333333;
    margin-bottom: 35px;
  }
  &__content{
    font-size: 20px;
    color: #262729;
  }

  &__cardbox{
    @apply flex flex-wrap;
    column-gap: 20px; // 控制列间距（左右间距）
    row-gap: 24px;    // 控制行间距（上下间距）
    margin-bottom: 50px;
  }

  &__card{
    width: calc((100% - 20px) / 2);
    box-sizing: border-box;
  }
  :deep(.card-box__title){
    margin-bottom: 10px;
    font-weight: 800;
    font-size: 24px;
  }
  :deep(.card-box__date){
    display: none;
  }

  .txt-h{
    font-size: 50px;
    color: #333333;
  }
}
</style>
