<template>
  <div class="terminal-access">
    <div class="terminal-access__content">
      <div class="cont-tit">
        <h4 class="tit-h">Drivers’ Access Cards</h4>
        <p class="tit-link underline-text">https://www.pct.com.gr/access-cards</p>
      </div>
      <div>
        This process still remains available only through the manual completion of an application and its forwarding to <span class="underline-text">registration@pct.com.gr</span> – However one of the two documents available in this section includes instructions of how to fill out the application. Perhaps the content of this application you want to include as text with visuals on the actual body-text of this category. 
      </div>
    </div>
    <el-divider border-style="dashed" />
    <div class="terminal-access__request">
      <div class="request-form">
        <div class="flex flex-col text-center">
          <div class="tit-img"><img :src="logoh" alt=""></div>
          <h6 class="tit-con">Terminal EntRance Request</h6>
        </div>
        <div class="form-wrap">
          <div>
            <p class="form-wrap__tit">Email or username</p>
            <el-input v-model="formState.username" placeholder="username" />
          </div>
          <div>
            <p class="form-wrap__tit">Password</p>
            <el-input v-model="formState.password" placeholder="password" />
          </div>
          <div>
            <el-button type="primary">Log In</el-button>
          </div>
          <div class="link-group">
            <p>Create an account</p>
            <p>Forgot my password</p>
          </div>
        </div>
      </div>

      <div class="request-step">
        <h4 class="tit-h mb-[30px]">Access Requests: </h4>
        <ul class="step-list">
          <li class="">Access for delivery of spare parts or provisions </li>
          <li class="">Access  for repairs on reefer containers </li>
          <li class="">Works on vessel </li>
          <li class="">Access of surveyor</li>
          <li class="">Guest Access</li>
          <li class="">Access of rail management personnel</li>
          <li class="">Terminal Pass-through</li>
          <li class="">Refueling</li>
        </ul>
      </div>
      
    </div>
  </div>
</template>

<script setup >
import logoh from '~/assets/images/logo-h.png';

const formState = reactive({
  username: '',
  password: '',
})
</script>

<style lang="scss" scoped>
.terminal-access{
  .el-divider--horizontal{
    margin: 60px 0;
  }
  :deep(.el-input__wrapper){
    padding: 10px 18px;
    min-width: 348px;
    width: 100%;
    background: #E1ECF0;
    border-radius: 10px;
    margin-bottom: 27px;
  }
  .el-button--primary{
    font-weight: 500;
    font-size: 17px;
    color: #FFFFFF;
    background: #1758B6;
    border-radius: 10px;
    min-width: 348px;
    width: 100%;
    /* padding: 15px 0; */
    height: 52px;
    margin-top: 12px;
  }

  &__content{
    padding: 40px 50px 50px;
    background: #F4F8FD;
    border-radius: 15px;
    color: rgba(38, 39, 41, 1);
    font-size: 18px;

    .cont-tit{
      @apply flex justify-between items-center;
      margin-bottom: 36px;
    }
  }

  &__request{
    @apply flex items-center;
    padding: 0 180px;

    .request-form{
      background: #FFFFFF;
      border-radius: 10px;
      border: 1px solid #1A0652;
      padding: 30px 35px 34px;
      width: 50%;
      min-width: 418px;
      margin-right: 123px;


      .tit-img{
        margin-bottom: 13px;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        img{
          width: 180px;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }
      }
      .tit-con{
        font-weight: 500;
        font-size: 22px;
        color: #000000;
        margin-bottom: 42px;
      }
      .form-wrap{
        &__tit{
          font-weight: 500;
          font-size: 17px;
          color: #262729;
          margin-bottom: 9px;
        }
        .link-group{
          @apply flex justify-between;
          font-weight: 500;
          font-size: 15px;
          color: #094699;
          padding-top: 9px;
        }
      }
    }

    .request-step{
    }
    .step-list {
      li{
        position: relative;
        padding-left: 22px;
        margin-top: 10px;
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

  .tit-h{
    font-weight: 500;
    font-size: 28px;
    color: #262729;
  }
  .tit-link{
    color: rgba(23, 88, 182, 1);
  }

  .underline-text {
    text-decoration: underline;
    font-size: 20px;
  }
}
</style>