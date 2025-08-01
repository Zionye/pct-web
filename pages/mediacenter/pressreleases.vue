<template>
  <div class="press-releases">
    <div class="mb-[22px]">
      <h6 class="txt-h">
        PCT: Supporting vulnerable families in local communities for Easter
      </h6>
    </div>
    <div class="imgs-box flex flex-wrap mb-[30px]">
      <div class="img-item">
        <img :src="bgPress1" alt="">
      </div>
      <div class="img-item">
        <img :src="bgPress2" alt="">
      </div>
    </div>
    <div class="">
      <div class="mb-[30px]">
        Piraeus Container Terminal S.A. (PCT), a subsidiary of COSCO SHIPPING Ports Ltd, remains committed to supporting the local community and once again, this year demonstrated its solidarity through a meaningful act. In light of the Easter season, the company distributed essential food supplies to 598 vulnerable families across the wider Piraeus area. The initiative was carried out with the support of representatives from parents associations and educational staff of schools, as well as the help of Churches in the municipalities of: Perama, Drapetsona-Keratsini, Korydallos, and Piraeus. PCT employees actively participated in the distribution, expressing their solidarity and social awareness.
      </div>
      <div class="mb-[30px]">
        This initiative began in 2012 and has since become an annual tradition, taking place during both Easter and Christmas periods. In total, the amount allocated exclusively to supporting vulnerable families has exceeded €225,000, with the number of beneficiaries growing each year. This action forms an integral part of PCT’s broader Corporate Social Responsibility (CSR) program, which focuses on social, educational, and environmental pillars. With the company’s planned CSR activities for 2025, the total value of PCT’s social impact efforts is expected to exceed €850,000.
      </div>
      <div class="mb-[30px]">
        “We are particularly proud by the recognition of PCT’s initiative by the families of Perama, neighboring municipalities, and our employees, as it affirms in the most meaningful way our unwavering commitment to supporting the local community and those in need. At PCT, social contribution is a strategic priority and a core principle that guides all our operations. This widespread response motivates us to continuously enhance our efforts,” stated Capt. Wang Jihang, Managing Director of PCT.
      </div>
      <div class="mb-[30px]">
        About PCT: Piraeus Container Terminal, one of the leading container terminals in the Mediterranean region, is a company founded in Greece, and a fully controlled subsidiary of COSCO SHIPPING Ports Limited (a leading container terminal operator ranked in 1st place in the world). As of October 1st 2009, PCT S.A. has undertaken for 35 years the implementation of the Concession Agreement for Piers II and III, which, following an international tender process, PPA S.A. assigned to COSCO Pacific Limited (now COSCO SHIPPING Ports Limited), to which the tender was awarded. Main activities of PCT S.A. is the provision of loading/unloading and storage services for imported and exported containers moving through the Port of Piraeus, including cargoes that use Piraeus only as a transit station (transshipment cargoes). The strategic location of Piraeus , being the first European Port after Suez canal with direct connection to E.U road and rail network  makes it not only an ideal port-hub for destinations in the Mediterranean and  Black Sea, but a sustainable partner for all stakeholders of distribution and Logistics services in Europe Middle East and Africa.
      </div>
      <div class="mb-[30px]">
        <p>For more information, please contact:</p>
        <p>Nina Argyropoulou </p>
        <p>Deputy Manager - Public Relations and Sustainability Department</p>
        <p>Email: Nina.Argyropoulou@pct.com.gr  </p>
        <p>Telephone : (+30) 210 4099100 int: 8026</p>
        <p>Mobile : (+30) 6942404782</p>
      </div>
    </div>
  </div>
</template>

<script setup >
import bgPress1 from '~/assets/images/bg-press1.png';
import bgPress2 from '~/assets/images/bg-press2.png';


</script>

<style lang="scss" scoped>
.press-releases{
  color: #262729;
  font-size: 20px;

  .txt-h{
    font-weight: 500;
    font-size: 20px;
    color: #262729;
  }

  .imgs-box{
    background: #EDF1F5;
    margin-bottom: 60px;
    padding: 30px;
    column-gap: 20px;
    .img-item{
      width: calc((100% - 20px) / 2);
      box-sizing: border-box;
      img{
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
}
</style>