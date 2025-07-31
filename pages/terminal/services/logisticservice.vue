<template>
  <div class="logistic-service">
    <div class="logistic-service__header">
      <h4>Web IP:</h4>
    </div>
    <div class="logistic-service__content">
      <p>
        Piraeus Consolidation and Distribution Centre – PCDC is a modern warehouse located in Piraeus Container Terminal (PCT S.A.). It handles both dry and refrigerated cargo as well as flammables and chemicals.
      </p>
      <p>
        PCDC is the only warehouse inside the Free Zone Type I area, thus having a major advantage in handling imported containers as no custom procedures are required for containers transferred to PCDC and additionally cargo remains tax and duty free as long as they remain stored in the warehouse.
      </p>
      <p>
        The strategic position of PCDC within Piraeus, which aims to become the hub for destinations in the Central and Eastern Mediterranean, as well as the Black Sea, makes PCDC very competitive in multimodal transportation and operating as a hub in the forwarding of imported cargo via sea, truck and air to European and non-European destinations under T1 or TIR custom formalities.
      </p>
      <p>
        More information on services offered can be found on <span class="text-b">www.pcdc.com.gr</span>
      </p>

    </div>
    <div class="flex justify-center">
      <img :src="bgLogistic" alt="">
    </div>
  </div>
</template>

<script setup >
import bgLogistic from '~/assets/images/bg-logistic.png';

</script>

<style lang="scss" scoped>
.logistic-service{
  &__header{
    font-weight: 800;
    font-size: 28px;
    color: #1758B6;
    margin-bottom: 20px;
  }
  &__content{
    font-size: 20px;
    color: #262729;
    p{
      margin-bottom: 40px;
    }
    .text-b{
      color: rgba(10, 71, 153, 1);
    }
  }
}
</style>