<template>
  <div class="pct-hpcs">
    <div class="pct-hpcs__btnbox">
      <el-button-group class="responsive-button-group">
        <el-button 
          v-for="item in buttons"
          :key="item.value"
          :class="{ 'is-active': activeIndex === item.value }"
          @click="activeIndex = item.value"
          >{{ item.label }}</el-button>
      </el-button-group>
    </div>

    <div>
      <div class="f-s__tit">
        <img :src="titlePtchpcsfunctions" alt="">
      </div>
      <div class="f-s__cont"><img :src="contentPtchpcsharmonized" alt=""></div>
      <div class="f-s__bg">
        <div class="bg-item"><img :src="bgSharmonized1" alt=""></div>
        <div class="bg-item"><img :src="bgSharmonized2" alt=""></div>
      </div>
    </div>

    <div>
      <div class="benefits__tit"><img :src="titleBenefits" alt=""></div>
      <div class="benefits__cont"><img :src="contentLesstimebyredtap" alt=""></div>
      <el-divider border-style="dashed" />
      <div class="benefits__box">
        <div class="box-item">
          <div class="box-item__img"><img :src="benefitsI1" alt=""></div>
          <div>
            <p>General Information</p>
            <p>info@hpcs.com.gr</p>
            <p>+30 210 4099002</p>
          </div>
        </div>
        <div class="box-item">
          <div class="box-item__img"><img :src="benefitsI2" alt=""></div>
          <div>
            <p>General Information</p>
            <p>info@hpcs.com.gr</p>
            <p>+30 210 4099002</p>
          </div>
        </div>
      </div>
    </div>

    <div>
      <div class="epikoinonia__tit">
        <div><img :src="titleEpikoinonia" alt=""></div>
        <el-dropdown popper-class="custom-popper">
          <el-button @click="handleClick">
            {{ selectedYear }}<el-icon class="el-icon--right"><arrow-down /></el-icon>
          </el-button>
          <template #dropdown>
            <el-dropdown-menu class="custom-dropdown-menu">
              <el-dropdown-item
                class="wide-item"
                v-for="item in years" 
                :key="item.value" 
                @click="selectedYear = item.value"
                >
                {{ item.value }}
              </el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
      <div>
        <div class="epikoinonia-iconbox">
          <div class="epikoinonia-iconbox__item" v-for="item in epikoinonias" :key="item.value">
            <div class="icon-box"><img :src="item.src" alt=""></div>
            <div>{{ item.value }}</div>
          </div>
        </div>
      </div>
    </div>

    <div class="litph">
      <div class="litph-tit"><img :src="titleLogintopcthpcs" alt=""></div>
      <div class="litph-bg">
        <!-- <img :src="bgLogintopcthpcs" alt=""> -->
         <p>( visit https://hpcs.com.gr/en/ )</p>
      </div>
      <div class="litph-subtit"><img :src="subtitLogintopcthpcs" alt=""></div>
      <div class="litph-link"><img :src="linkBecomeamemberinh" alt=""></div>
      <div class="litph-pdf"><img :src="ptdRenewyoursubscript" alt=""></div>
    </div>

  </div>
</template>

<script setup >
import { ArrowDown } from '@element-plus/icons-vue';
import titlePtchpcsfunctions from '~/assets/images/title-ptchpcsfunctions.png';
import contentPtchpcsharmonized from '~/assets/images/content-ptchpcsharmonized.png';
import bgSharmonized1 from '~/assets/images/bg-sharmonized1.png';
import bgSharmonized2 from '~/assets/images/bg-sharmonized2.png';
import titleBenefits from '~/assets/images/title-benefits.png';
import contentLesstimebyredtap from '~/assets/images/content-lesstimebyredtap.png';
import benefitsI1 from '~/assets/images/benefits-i1.png';
import benefitsI2 from '~/assets/images/benefits-i2.png';
import titleEpikoinonia from '~/assets/images/title-epikoinonia.png';
import titleLogintopcthpcs from '~/assets/images/title-logintopcthpcs.png';
// import bgLogintopcthpcs from '~/assets/images/bg-logintopcthpcs.png';
import subtitLogintopcthpcs from '~/assets/images/subtit-logintopcthpcs.png';
import linkBecomeamemberinh from '~/assets/images/link-becomeamemberinh.png';
import ptdRenewyoursubscript from '~/assets/images/ptd-renewyoursubscript.png';

const activeIndex = ref(1);
const buttons = [
  { value: 1, label: 'PCT HPCS Functions & Services' },
  { value: 2, label: 'Benefits:' },
  { value: 3, label: 'Log in to PCT HPCS' },
  { value: 4, label: 'Participation in PCT HPCS' }
];

const years = [
  { value: '2025', label: '2025' },
  { value: '2024', label: '2024' },
  { value: '2023', label: '2023' },
  { value: '2022', label: '2022' },
  { value: '2021', label: '2021' },
  { value: '2020', label: '2020' },
];
const selectedYear = ref(years[0].value); // 默认选择第一个年份
// const yearOptions = ref(years.map(year => ({ value: year.value, label: year.label })));
const handleClick = () => {
}

const epikoinonias = [
  { src:'/images/epikoinonia/heart-anoqocbr.png', value: 'Port Fqcility Entry Applicqtion'},
  { src:'/images/epikoinonia/heart-tlr.png', value: 'Trqin loqding/unlooding report'},
  { src:'/images/epikoinonia/heart-rr.png', value: 'Rqilwqy routes'},
  { src:'/images/epikoinonia/heart-anoqocbr.png', value: 'Advqnce notice of qrrivql of contqiners by rqil'},
  { src:'/images/epikoinonia/heart-hqs.png', value: 'Hqulqge qllocqtion system'},
  { src:'/images/epikoinonia/heart-cao.png', value: 'Contqiner Advqnce Order'},
  { src:'/images/epikoinonia/heart-mc.png', value: 'Mqnqge CCS'},
  { src:'/images/epikoinonia/heart-foed.png', value: 'File online export declqrqtion'},
  { src:'/images/epikoinonia/heart-odo.png', value: 'Online Delivery Order'},
  { src:'/images/epikoinonia/heart-rdogctc.png', value: 'Request dispqtch of goods cleqred through customs'},
  { src:'/images/epikoinonia/heart-ced.png', value: 'Contqiner export declqrqtion'},
  { src:'/images/epikoinonia/heart-foid.png', value: 'File online import declqrqtions'},
  { src:'/images/epikoinonia/heart-st.png', value: 'Stock trqnsqctions'},
  { src:'/images/epikoinonia/heart-fc.png', value: 'Fill contqiners'},
  { src:'/images/epikoinonia/heart-ed.png', value: 'Expected deliveries'},
  { src:'/images/epikoinonia/heart-sef.png', value: 'Submit EDI files'},
  { src:'/images/epikoinonia/heart-rd.png', value: 'Reprint documentqtion'},
  { src:'/images/epikoinonia/heart-gt.png', value: 'Gqte trqffic'},
  { src:'/images/epikoinonia/heart-tt.png', value: 'Trqck’n’Trqce'},
  { src:'/images/epikoinonia/heart-rq.png', value: 'Rqil qrrivqls/depqrtures'},
  { src:'/images/epikoinonia/heart-pwc.png', value: 'Port weqther conditions'},
  { src:'/images/epikoinonia/heart-swtsq.png', value: 'Supply wqter to ship qpplicqtion'},
  { src:'/images/epikoinonia/heart-sq.png', value: 'Ship qrrivqls/depqrtures'},
  { src:'/images/epikoinonia/heart-mop.png', value: 'Mqnqge online pqyments'},
  { src:'/images/epikoinonia/heart-ieq.png', value: 'Inspector entry qpplicqtion'},
  { src:'/images/epikoinonia/heart-sspdq.png', value: 'Ship spqre pqrts delivery qpplicqtion'},
  { src:'/images/epikoinonia/heart-rcreq.png', value: 'Refrigerqted contqiner repqir entry qpplicqtion'},
  { src:'/images/epikoinonia/heart-tr.png', value: 'Tqllymqn reports'},
]
</script>

<style lang="scss" scoped>
.pct-hpcs{
  &__btnbox{
    width: 100%;
    margin-bottom: 50px;
  }
  .responsive-button-group{
    display: flex;
    width: 100%;

    .el-button {
      flex: 1;
      min-width: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      text-align: center;

      border-color: rgba(9, 70, 153, 0.02);
      /* background-color: #f5f5f5; */
      /* color: #333; */
      font-weight: normal;
      font-size: 20px;
      padding-top: 10px;
      padding-bottom: 10px;
      &:hover, &:focus {
        border-color: rgba(9, 70, 153, 0.02) !important;
        background-color: #ffffff !important;
        color: #333333 !important;
      }


      &.is-active{
        font-size: 20px;
        color: #094699;
        border: 1px solid #094699 !important;
        background-color: white !important;
        z-index: 1;
      }
    }
  }

  .f-s{

    &__tit{
      /* font-size: 30px;
      color: #333333; */

      margin-bottom: 28px;
      /* width: 442px;
      height: 100%;
      img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
      } */
    }
    &__cont{
      margin-bottom: 30px;
      @apply flex items-center;
      /* height: 736px;
      overflow: hidden;
      img{
        height: 100%;
        width: auto;
        min-width: 100%;
        display: block;
      } */
    }
    &__bg{
      margin-bottom: 50px;
      padding: 30px;
      background: rgba(237, 241, 245, 1);
      @apply flex flex-wrap;
      column-gap: 20px; // 控制列间距（左右间距）
      .bg-item{
        width: calc((100% - 20px) / 2);
        height: 400px;
        border-radius: 8px;
        overflow: hidden;
        img{
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }
      }
    }
  }

  .benefits{
    &__tit{
      margin-bottom: 28px;
      /* width: 114px;
      height: 100%;
      img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
      } */
    }
    &__cont{
      margin-bottom: 30px;
      @apply flex items-center;
      /* height: 256px;
      overflow: hidden;
      img{
        height: 100%;
        width: auto;
        min-width: 100%;
        display: block;
      } */
    }
    &__box{
      @apply flex flex-wrap;
      column-gap: 40px; // 控制列间距（左右间距）
      
      .box-item{
        width: calc((100% - 40px) / 2);
        background: #F4F7FB;
        border-radius: 15px;
        border: 1px solid rgba(223,223,223,0.7);
        font-size: 22px;
        color: #262729;
        padding: 56px 130px;
        margin-bottom: 70px;
        @apply flex items-center;

        &__img{
          margin-right: 60px;
          width: 80px;
          height: 80px;
          img{
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
          }
        }
      }
    }
  }

  .epikoinonia{
    &__tit{
      @apply flex items-center justify-between;
      margin-bottom: 41px;
    }
    &-iconbox{
      margin-bottom: 70px;
      @apply flex flex-wrap;
      gap: 34px; // 控制列间距（左右间距）
      &__item{
        @apply flex items-center;
        width: calc((100% - 34px * 2) / 3);
        font-size: 18px;
        color: #262729;

        .icon-box{
          width: 50px;
          height: 50px;
          margin-right: 20px;
          img{
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
      }
    }
  }

  .litph{
    img{
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
    &-tit{
      width: 278px;
      height: 100%;
      margin-bottom: 30px;
    }
    &-bg{
      margin-bottom: 70px;
      height: 140px;
      width: 100%;
      /* border-radius: 8px; */
      overflow: hidden;
      /* position: relative; */
      background: url("~/assets/images/bg-logintopcthpcs.png") no-repeat;
      background-size: cover;
      background-position: center;
      @apply flex justify-center items-center;
      /* img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
      } */
       p{
        font-size: 20px;
        color: #094699;
       }
    }
    &-subtit{
      width: 214px;
      height: 100%;
      margin-bottom: 30px;
    }
    &-link {
      width: 850px;
      height: 100%;
      margin-bottom: 27px;
    }
    &-pdf{
      width: 350px;
      height: 100%;
      margin-bottom: 27px;
    }
  }

}
</style>