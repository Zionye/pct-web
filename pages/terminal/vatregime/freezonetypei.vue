<template>
  <div class="deferment-and-reverse-vat">
    <div>
      <h4 class="txt-b">No VAT, No duties</h4>
      <div class="mb-[56px]">
        <p>
          Free Zones are special areas, usually near ports or airports, for the storage of imported goods under beneficial customs conditions. When goods are held in a Free Zone, import duty, VAT and excise duties are suspended on goods imported from outside the European Community until the goods are released into free circulation, used or consumed within the Free Zone.
        </p>
      </div>
    </div>

    <div>
      <h4 class="txt-b">Efficient Processes</h4>
      <div class="mb-[56px]">
        <p>
          Free Zone can help you to manage the process of importing goods more effectively and/or improve cash flow. Once you are authorized to operate in a Free Zone (or you have chosen an operator who is already authorized to operate on your behalf) you can enter your goods and then remove them when it suits your business. You may also, carry out certain handling or processing operations on the goods while they remain in the Free Zone.
        </p>
      </div>
    </div>

    <div>
      <h4 class="txt-b">Tax Flexibilities</h4>
      <div class="mb-[56px]">
        <p>
          Special tax provisions, provide the “simple” processing/repacking/labelling of products, based to non-community components, without  company’s obligation of having a Permanent establishment in Greece (income taxation) and under specific conditions, their supply within EU with no customs duties and VAT, as free circulated goods within European Union.
        </p>
      </div>
    </div>

    <div>
      <h4>Free Zone Type I Benefits</h4>
      <ul class="step-list">
        <li>
          Improved cash flow management by removing the obligation to pay VAT or import duty at the same time as goods are physically transported into Greece you can meet your import tax obligations closer to the time you sell the goods.
        </li>
        <li>
          VAT-free importation of goods designated for another EU Member State.
        </li>
        <li>
          Goods brought from outside the EU and held in a Free Zone are treated as being outside the customs territory of the EU even though they are physically within it.
        </li> 
        <li>
          In the Free Zone you can store goods without paying import VAT, excise duty or import duty until you remove the goods or released for free circulation.
        </li>
        <li>
          Free Zones can help you to carry out certain handling or processing operations on the goods while they remain in the Free Zone.
        </li>
        <li>
          Improved cash flow management by removing the obligation to pay VAT or import duty at the same time as goods are physically transported into Greece you can meet your import tax obligations closer to the time you sell the goods. goods may be put in free zones in order to benefit from Community legislation governing export refunds or the repayment of import duties and VAT refund even if actual export procedure will take place on later stage. (i.e. no VAT is charged by the supplier in respect of those goods at triagonal transactions).
        </li>
      </ul>
    </div>

    <div class="typei-benfit">
      <h6>PIRAEUS FREE ZONE Type I — Benfits</h6>
      <div class="typei-benfit__box">
        <div class="img-wrap">
          <div class="img-cont">
            <img :src="bgVat1" alt="">
          </div>
          <p>
            No speclal Customs license required for repacking or any other simple handling or processing operations on goods
          </p>
        </div>
        <div class="img-wrap">
          <div class="img-cont">
            <img :src="bgVat1" alt="">
          </div>
          <p>
            No speclal Customs license required for repacking or any other simple handling or processing operations on goods
          </p>
        </div>
        <div class="img-wrap">
          <div class="img-cont">
            <img :src="bgVat3" alt="">
          </div>
          <p>
            No transportat ion cost will be applied,since the operation area is situated inside piraeus port
          </p>
        </div>
      </div>

      <ul class="dots-gradient">
        <li class="dots-item"></li>
        <li class="dots-item dashed"></li>
        <li class="dots-item dashed"></li>
        <li class="dots-item dashed"></li>
      </ul>

    </div>
  </div>
</template>

<script setup >
import bgVat1 from '~/assets/images/bg-vat1.png';
import bgVat3 from '~/assets/images/bg-vat3.png';

</script>

<style lang="scss" scoped>
.deferment-and-reverse-vat{
  color: #262729;
  font-size: 20px;

  h4{
    font-weight: 800;
    font-size: 30px;
    color: #333333;
    margin-top: 20px;

    &.txt-b{
      color: #1758B6;
    }
  }
  p{
    margin-bottom: 20px;
  }

  .step-list {
    li{
      position: relative;
      padding-left: 22px;
      margin-bottom: 20px;
      &:before {
        content: "";
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        border: 5px solid rgba(26, 6, 82, 1);
        border-radius: 50%;
      }
    }
  }

  .typei-benfit{
    margin-top: 50px;
    padding: 52px 50px 42px;
    background: #EDF1F5;
    h6{
      font-size: 24px;
      color: #094699;
      text-align: center;
      margin-bottom: 50px;
    }

    &__box{
      @apply flex flex-wrap;
      column-gap: 30px; // 控制列间距（左右间距）
    }
    .img-wrap{
      width: calc((100% - 30px * 2) / 3); /* 总宽度减去2个gap，然后3等分 */
      box-sizing: border-box;
      background: #FFFFFF;
      border-radius: 30px;
      margin-bottom: 60px;
      padding: 24px 50px 24px;

      .img-cont{
        margin-bottom: 44px;
        img{
          display: block;
          object-fit: cover;
          width: 100%;
          height: 100%;
        }
      }
    }
  }

  .dots-gradient{
    @apply flex justify-center gap-[14px];
    
    .dots-item{
      @apply w-[12px] h-[12px] rounded-full bg-[#094699];

      &.dashed{
        @apply bg-transparent border border-[#094699];
      }
    }
  }
}
</style>
