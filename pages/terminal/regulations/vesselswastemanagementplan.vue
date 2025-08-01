<template>
  <div class="vessels-waste-management-plan">
    <div>
      <p>
        CT S.A. has developed and implements a Vessels' Waste Management Plan, approved by the Hellenic Ministry of Development, Competitiveness and Mercantile Marine.
      </p>
      <p>
        The Plan is in accordance with the European Directive 2000/59/EC on port reception facilities for ship-generated waste and cargo residues, as embodied in Greek Legislation, as well as the International Convention Marpol 73/78 for the Prevention of Pollution from Ships.
      </p>
      <p>
        According to PCT’s Vessel's Waste Management Plan, PCT SA provides port reception facilities, adequate to meet the needs of all kind of vessels (irrespective of the flag they fly) normally calling at PCT SA Terminal, without causing them undue delay.
      </p>
      <p class="mt-[30px] mb-[36px]">
        The waste and cargo residues, indicated in PCT‘s Vessels' Waste Management Plan, are categorized according to the International Convention Marpol 73/78, as follows:
      </p>
    </div>

    <div class="flex justify-between">
      <ul class="step-list mr-[60px]">
        <li>Annex I: Oily waste</li>
        <li>Annex II: Noxious liquid substances carried in bulk</li>
        <li>Annex III: Harmful substances carried in packaged form</li>
        <li>Annex IV: Sewage</li>
        <li>Annex V: Garbage</li>
        <li>Annex VI:  Ozone-depleting substances</li>
      </ul>
      <div>
        <img :src="bgPlan" alt="">
      </div>
    </div>

    <el-divider border-style="dashed" />

    <div>
      <p>
        PCT’s port reception facilities cover all the above-mentioned types of waste and cargo residues.
      </p>
      <p class="mb-[26px]">
        Moreover, the ship-generated waste management, according to PCT’s Vessels' Waste Management Plan, is divided in two categories:
      </p>
      <ul class="step-list mr-[28px]">
        <li>
          Liquid waste management: Annex I (e.g. crude oil, fuel oil, sludge and oil refined products, lubricating oil, fuel residues, sludge and oily bilge water etc), Annex II (e.g. noxious liquid cargo residues, tank washings and dirty ballast water etc), Annex III, Annex IV (e.g. sewage generated from ship lavatories, kitchen areas etc) (press the Link to view the Direct Fees for Liquid Waste for Vessels)
        </li>
        <li>
          Solid waste management: Domestic and Operational waste (Annex V), Harmful solid substances carried in packaged form (Annex III) (press the Link to view the Direct Fees for Solid Waste for Vessels)
        </li>
      </ul>
      <div>
        n view of the above, PCT’s Waste Handling Services Department is organized, in order to ensure the effective operation of  
        <span class="txt-b">... read </span>
        <span class="txt-b txt-mo">more</span>
      </div>
    </div>
    
  </div>
</template>

<script setup >
import bgPlan from '~/assets/images/bg-plan.png';

</script>

<style lang="scss" scoped>

.vessels-waste-management-plan{
  color: #262729;
  font-size: 20px;
  
  .el-divider--horizontal{
    margin: 50px 0;
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

  .txt-b{
    color: #3CC2EF;
  }
  .txt-mo{
    font-size: 24px;
  }
}
</style>
