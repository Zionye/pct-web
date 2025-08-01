<template>
  <div class="deferment-and-reverse-vat">
    <div>
      <h4>Import VAT Deferment in Greece</h4>
      <div class="mb-[56px]">
        <p>When goods are released for free circulations within the EU, import duties and VAT at import become due. In principle, import duties and VAT at import must be paid at the moment the import declaration is submitted.</p>
        <p>Greece instituted a system that provides for the deferment of VAT at the time of import. Instead of paying VAT when the goods are imported into free circulation within the EU, the payment can be deferred to a periodic VAT return.</p>
        <p>As a result, there is no actual VAT payment during the goods importation. </p>
      </div>
    </div>

    <div>
      <h4>What is exactly the VAT Deferment System?</h4>
      <div class="mb-[56px]">
        <p>
          The payment of VAT can be moved from the time of import to when the company declares taxes, in monthly bases. The VAT due for the import will be recorded in the declaration as payable, while at the same time, amounts will be subtracted as pre-paid taxes.
        </p>
        <p>
          Domestic Reverse charge Mechanism in Greece
        </p>
        <p>
          What is exactly the domestic reverse charge mechanism?
        </p>
        <p>
          When the liability to pay VAT is shifted from the supplier to the recipient of the supply it is called reverse charge.
        </p>
        <p>
          According to the reverse charge mechanism the customer to whom the good are supplied to is the person who must pay and account for the VAT, not the supplier.
        </p>
      </div>
    </div>

    <div>
      <h4>Competitive advantages & positive effects of the new favorable Greek VAT provisions</h4>
      <ul class="step-list">
        <li>Fast licensing process</li> 
        <li>Results in considerable cash-flow and interest benefit</li> 
        <li> No actual payment of VAT at import-The liability to account for VAT shifts to the customer – recipient of the goods and the VAT is finally paid by the final buyer of the goods at the country where the goods are consumed ( B2C)</li> 
        <li>After customs entry in Greece, the goods are free (VAT) to circulate within EU </li> 
        <li>No tax penalties and no retrospective effect if the conditions of the required threshold of the statistical value of imports or of the rate of the imported goods aren’t met.</li> 
      </ul>
    </div>
  </div>
</template>

<script setup >


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
}
</style>
