<template>
  <div class="authorization-template">
    <div class="auth-tit">
      <h4>To:  PCT S.A. </h4>
       <h4>Free Zone Management Company</h4>
    </div>

    <div class="authorization-template__form">
      <h2 class="form-title">AUTHORIZATION</h2>
      <div class="form-content">
        <el-form class="custom-form" :model="form" label-width="200px">
          <el-row :gutter="20">
            <el-col :span="8" v-for="(item, index) in formItems" :key="index">
              <el-form-item :label="item.label">
                <el-input v-model="form[item.prop]" placeholder="请输入"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </div>
      <div class="custom-table">
        <el-table border class="customized-table" header-align="center" :data="tableData" style="width: 100%">
          <el-table-column prop="name" label="Name & Surname" />
          <el-table-column prop="certificate" label="Certificate No of Customs Clearer" />
          <el-table-column prop="eori" label="EORI" />
        </el-table>
      </div>
    </div>

    <div class="certified-box">
      <ul class="step-list">
        <li>
          To provide all the necessary documentation to PCT S.A, to collect Customs Certificates for the lodging of a declaration and upon provision of the necessary certification, to carry out all the procedures for the collection of the containers, for which I am the legitimate recipient.
        </li>
        <li>
          To receive and settle all invoices issued by PCT S.A. in my name.
        </li>
        <p>
          I additionally hereby declare that in the event of the withdrawal of this authorization, I am obliged to immediately notify you in writing, otherwise this document remains valid.
        </p>
      </ul>
      
      <div class="flex flex-col items-end">
        <div>
          <p>The Delegator</p>
           <p>Certified Signature</p>
        </div>
      </div>

      <div class="colon-wrap">
        <div class="colon-wrap__content">
          <div class="flex flex-end">
            <img class="self-end" :src="iColon" alt="">
            <p class="leading-none self-end ml-[10px]">I confirm that the aforesaid personal data are correct and I agree to the process and use of the personal data by PCT S.A. </p>
          </div>
          <p class="text-center mt-[10px]">for the purpose of the promotion of cooperation and services.</p>
        </div>
        <div class="flex justify-center mt-[36px]">
          <el-button class="btn-y" size="large">Yes</el-button>
          <el-button class="btn-n" size="large">No</el-button>
        </div>
      </div>

      <div class="mt-[50px]">
        <p>
          I agree to the process and the use of the aforesaid personal data in order for them to be categorized and for statistical analysis purposes and I have been properly informed in accordance with the current legislation in force. 
        </p>
        <p class="mt-[36px]">
          PCT S.A. collects and processes the aforesaid personal data strictly for the purposes mentioned above and for which you have expressly consented. The processing being performed is absolutely necessary and performed by competent personnel of the Company. The Company utilizes for the purposes of processing other persons  that are bound to proceed to processing specially asked according to the present agreement and the Law. The personal data may be sent to other Countries either within the European Union or not, for the purposes of processing that you have provided consent. The processors within the European Union are bound by GDPR 2016/679/EK (Regulation) and their contractual relation with the Company, from which the security of the personal data is ensured and the processing according to the consent you provide. For non European Union Countries the Company follows the provisions of the Regulation, concerning the provision of personal data to Non European Countries in order to ensure that the process is being performed according to the Law and your consent. The Company has taken all necessary measures to ensure the safety of your personal data and the access to them to be restricted according to the Law. The personal data are being kept for the period of (5) years except otherwise provided by the Law. You have the option if you wish to contact the Company in order to be informed for your personal data, ask for the amendment of them, or the cessation of the use, or the deletion of them overall or partially, or the portability of them  and in general to execute your legal rights according to the provisions of the Law. Please contact us at 210 4099100 or e-mail at GDPR@pct.com.gr or at our offices at SEMPO N. IKONIO PERAMA 188 63.
        </p>
      </div>
    </div>

  </div>
</template>

<script setup >
import iColon from '~/assets/images/i-colon.png';

const form = reactive({
  field1: '',
  field2: '',
  field3: '',
  field4: '',
  field5: '',
  field6: '',
},);
const formItems = [
  { label: 'I, the undersigned', prop: 'field1' },
  { label: 'Father’s name', prop: 'field2' },
  { label: 'I.D. No:', prop: 'field3' },
  { label: 'Issued at', prop: 'field4' },
  { label: 'Police Station, Tax No', prop: 'field4' },
  { label: 'Tax Office', prop: 'field5' },
  { label: 'Address:', prop: 'field6' },
];

const tableData = [
  {name: '', certificate: '', eori: '',},
  {name: '', certificate: '', eori: '',},
  {name: '', certificate: '', eori: '',},
  {name: '', certificate: '', eori: '',},
];

</script>

<style lang="scss" scoped>
.authorization-template{
  .auth-tit{
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 22px;
  }
  .custom-form {
    margin-bottom: 30px;

    .el-form-item {
      /* margin-bottom: 34px; */
    }
    :deep(.el-form-item__label) {
      color: #333333;
      font-size: 18px;
    }
    :deep(.el-input__wrapper){
      background: #F7FAFC;
    }
  }

  .custom-table {
    /* padding-left: 180px; */
    margin-top: 51px;

    .customized-table {
      background-color: #F7FAFC;

      :deep(.el-table__header-wrapper th) {
        background-color: #F7FAFC;
        font-weight: bold;
        height: 50px;
        font-weight: 500;
        font-size: 18px;
        text-align: center;
        color: #333333;
      }

      :deep(.el-table__body tr) {
        background-color: #F7FAFC;
        height: 50px;
      }

      /* :deep(.el-table td),
      :deep(.el-table th) {
        padding: 12px 0;
        text-align: center;
      } */

      /* // 斑马纹效果（可选）
      :deep(.el-table__row--striped) {
        background-color: #f0f7ff;
      } */
    }
  }
  
  &__form {
    padding: 32px 30px 36px;
    background: #F3F7FA;
    margin-bottom: 30px;
    
    .form-title {
      color: #262729;
      text-align: center;
      margin-bottom: 28px;
      font-size: 24px;
      font-weight: bold;
    }
    
    
    
    
    
  }

  .certified-box{
    color: #262729;
    font-size: 20px;
  }
  .step-list {
    margin-bottom: 40px;

    li{
      position: relative;
      padding-left: 8px;
      &:before {
        content: "";
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        border: 1px solid rgba(26, 6, 82, 1);
        border-radius: 50%;
      }
    }
  }

  .colon-wrap{
    padding: 22px 28px 28px;
    background: #F7F7F8;
    border-radius: 0px 25px 25px 25px;

    font-size: 20px;
    color: #333333;

    &__content{

    }
  }
  .btn-y{
    background: #1A0652;
    border-radius: 5px;
    color: #ffffff;
    font-size: 15px;
    padding: 12px 37px;
  }
  .btn-n{
    box-sizing: border-box;
    background: rgba(23,88,182,0.12);
    border-radius: 5px;
    border: 1px solid #1A0652;
    font-size: 15px;
    padding: 12px 37px;
    color: #262729;
  }

}
</style>
