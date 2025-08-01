<template>
  <div class="customs-regime">
    <div>
      <p>
        Under Regime 42 a simplified procedure is established for importation of non-Community goods harmonized always with the European Community Law for not paying VAT to the Customs Office during the goods importation but paying it to the country of the goods final destination in the EU. The VAT will be payable at the destination country where the products will be consumed.In particular, Regime 42 provides:
      </p>
      <p class="mt-[30px] mb-[70px]">
        Import of goods from 3rd countries without payment of VAT with direct delivery to another member state of the EU
      </p>
    </div>

    <div>
      <ul class="step-list">
        <li>VAT is paid at the destination country during the sale</li>
        <li>Intra-community transactions monitored by the Authorities until VAT payment at destination</li>
        <li>Simplified customs procedures for the importers on condition that:</li>
      </ul>
      <ul class="empty-list">
        <li>VAT is paid at the destination country during the sale</li>
        <li>Intra-community transactions monitored by the Authorities until VAT payment at destination</li>
        <li>Simplified customs procedures for the importers on condition that:</li>
      </ul>
    </div>
  </div>
</template>

<script setup >


</script>

<style lang="scss" scoped>
.customs-regime{
  color: #262729;
  font-size: 20px;

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
  .empty-list{
    padding-left: 20px;
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
        width: 10px;
        height: 10px;
        border: 1px solid rgba(26, 6, 82, 1);
        border-radius: 50%;
      }
    }
  }
}
</style>
