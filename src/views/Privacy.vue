<template>
  <!-- eslint-disable -->
  <PageWrapper :bgColor="colorBg">
    <CloseBack :xColor="'black'"/>
    <SectionWrap v-if="apiData">
      <StyledTitle>Privacy Policy</StyledTitle>
      <PrivacySection>
        <CopyWrapper id='intro-wrapper'>
          <StyledMarkup v-html="apiData.options.introduction"/>
        </CopyWrapper>
        <div class="anchor-links">
          <h2>1. How Do We Use the Information Collected?</h2>
          <ol>
            <li>
              <h3>a. Information You Provide to Us</h3>
              <p>You may provide us with Personal Information and Demographic Information such as when you contact us through the Site or sign up to receive our marketing communications.
                <ScrollButton href="#" v-scroll-to="'#section-1-a'"><span>More</span></ScrollButton>
              </p>
            </li>
            <li>
              <h3>b. Information We Collect and Store As You Access and Use the Site</h3>
              <p>Certain information may be collected from you automatically when you access and use the Site.  For example, we and third parties may use Tracking Technologies (defined below) to collect Usage Information (defined below) based on your Device Identifier (defined below) for a variety of purposes, which may include activities over time and across third party locations.
                <ScrollButton href="#" v-scroll-to="'#section-1-b'"><span>More</span></ScrollButton>
              </p>
            </li>
            <li>
              <h3>c. Interactions with Third-Party Services</h3>
              <p>If you interact with third-party services, those services may send us information about you and you or we may send them information about you.
                <ScrollButton href="#" v-scroll-to="'#section-1-c'"><span>More</span></ScrollButton>
              </p>
            </li>
            <li>
              <h3>d. California / Delaware Do Not Track Disclosures</h3>
              <p>We do not look for or respond to do not track signals, but you may have certain other options regarding tracking and/or targeting.
                <ScrollButton href="#" v-scroll-to="'#section-1-d'"><span>More</span></ScrollButton>
              </p>
            </li>
          </ol>
        </div>
        <div class="anchor-links">
          <h2>2. How Do We Use the Information Collected?</h2>
          <p>We use your Personal Information, Demographic Information and Usage Information for a variety of purposes detailed in this section.
            <ScrollButton href="#" v-scroll-to="'#section-2'"><span>More</span></ScrollButton>
          </p>
        </div>
        <div class="anchor-links">
          <h2>3. How and When Do We Disclose Information to Third Parties?</h2>
          <p>We may provide your information to third parties under various circumstances detailed in this Section. These may include:</p>
          <ol>
            <li>
              <h3>a. Third Parties Providing Services on our Behalf</h3>
              <p>Our vendors may collect your information or we may share it with them.
                <ScrollButton href="#" v-scroll-to="'#section-3-a'"><span>More</span></ScrollButton>
              </p>
            </li>
            <li>
              <h3>b. Administrative and Legal Reasons</h3>
              <p>There are a variety of administrative and legal reasons for which we may share your information. 
                <ScrollButton href="#" v-scroll-to="'#section-3-b'"><span>More</span></ScrollButton>
              </p>
            </li>
            <li>
              <h3>c. Affiliates and Business Transfer</h3>
              <p>We may share your information with our affiliates or in the event of a sale, merger or similar transaction.
                <ScrollButton href="#" v-scroll-to="'#section-3-c'"><span>More</span></ScrollButton>
              </p>
            </li>
            <li>
              <h3>d. Sweepstakes, Contests and Promotions</h3>
              <p>Promotions entrants may be required to consent to certain information sharing.
                <ScrollButton href="#" v-scroll-to="'#section-3-d'"><span>More</span></ScrollButton>
              </p>
            </li>
            <li>
              <h3>e. Your California Privacy Rights</h3>
              <p>California residents may request information about sharing of certain personal information with third parties for the third parties’ direct marketing purposes by contacting us using the methods described in this Section.
                <ScrollButton href="#" v-scroll-to="'#section-3-e'"><span>More</span></ScrollButton>
              </p>
            </li>
          </ol>
        </div>
        <div class="anchor-links">
          <h2>4. Ads and Information About You</h2>
            <p>We and third parties may send you targeted ads based on your location, information and/or behavior.  If you object, you can exercise choices some third parties may offer. 
            <ScrollButton href="#" v-scroll-to="'#section-4'"><span>More</span></ScrollButton>
          </p>
        </div>
        <div class="anchor-links">
          <h2>5. Do Third-Party Content, Links to Third-Party Sites and/or Third-Party Apps Appear on the Site?</h2>
            <p>We may allow you to access third-party content on the Site, or to link to third-party applications and locations from the Site, but we are not responsible for your interaction with third-party content, apps, and locations. 
            <ScrollButton href="#" v-scroll-to="'#section-5'"><span>More</span></ScrollButton>
          </p>
        </div>
        <div class="anchor-links">
          <h2>6. How Do I Change My Information and Communications Preferences?</h2>
            <p>You may change certain information and preferences. 
            <ScrollButton href="#" v-scroll-to="'#section-6'"><span>More</span></ScrollButton>
          </p>
        </div>
        <div class="anchor-links">
          <h2>7. What About Transfer of Information to the United States?</h2>
          <p>Data may be transferred to the United States. 
            <ScrollButton href="#" v-scroll-to="'#section-7'"><span>More</span></ScrollButton>
          </p>
        </div>
        <div class="anchor-links">
          <h2>8. What Should Parents Know About Children?</h2>
          <p>We do not intend to collect Personal Information from children. If you think we have, let us know. 
            <ScrollButton href="#" v-scroll-to="'#section-8'"><span>More</span></ScrollButton>
          </p>
        </div>
        <div class="anchor-links">
          <h2>9. What About Security?</h2>
          <p>No data security is absolute, but we take reasonable steps to secure data appropriately. 
            <ScrollButton href="#" v-scroll-to="'#section-9'"><span>More</span></ScrollButton>
          </p>
        </div>
        <div class="anchor-links">
          <h2>10. What About Changes to the Privacy Policy?</h2>
          <p>We may change this Privacy Policy as explained 
            <ScrollButton href="#" v-scroll-to="'#section-10'"><span>here</span></ScrollButton>
          </p>
        </div>
        <div class="anchor-links">
          <h2>11. Supplemental Privacy Notice For Residents of the EU and EEA</h2>
          <p>This Section applies only if you reside in the EU and EEA and provide the Company with data. 
            <ScrollButton href="#" v-scroll-to="'#section-11'"><span>here</span></ScrollButton>
          </p>
        </div>
        <div id="section-1">
          <CopyWrapper>
            <h2>1. What Information Does the Site Collect?</h2>
            <ol>
              <li id="section-1-a">
                <h3>a. Information You Provide to Us</h3>
                <StyledMarkup v-html="apiData.options.section_one[0].copy"/>
              </li>
              <li id="section-1-b">
                <h3>b. Information We Collect and Store As You Access and Use the Site</h3>
                <StyledMarkup v-html="apiData.options.section_one[1].copy"/>
              </li>
              <li id="section-1-c">
                <h3>c. Interactions with Third Party Services</h3>
                <StyledMarkup v-html="apiData.options.section_one[2].copy"/>
              </li>
              <li id="section-1-d">
                <h3>d. California / Delaware Do Not Track Disclosures</h3>
                <StyledMarkup v-html="apiData.options.section_one[3].copy"/>
              </li>
            </ol>
          </CopyWrapper>
        </div>
        <div id="section-2">
          <AnchorCopy :Data="apiData.options.sections[0]" :Number="'2'"/>
        </div>
        <div id="section-1">
          <CopyWrapper>
            <h2>3. How and When Do We Disclose Information to Third Parties?</h2>
            <p>We may share non-Personal Information, such as aggregated user statistics, with third parties.  Further, we may share your Device Identifiers with third parties along with data related to you and your activities.  Also, we may share your Personal Information with third parties with whom we have marketing or other relationships for the third parties’ direct marketing purposes.  If you are a California resident, you have the right to request additional information about this sharing, so please see Section (3)(f) below.  In addition, we may share the information we have collected about you, including Personal Information, as disclosed at the time you provide your information and as described below or otherwise in this Privacy Policy.  We may disclose your information as follows:</p>
            <ol>
              <li id="section-3-a">
                <h3>a. Third Parties Providing Services on our Behalf.</h3>
                <StyledMarkup v-html="apiData.options.section_three[0].copy"/>
              </li>
              <li id="section-3-b">
                <h3>b. Administrative and Legal Reasons.</h3>
                <StyledMarkup v-html="apiData.options.section_three[1].copy"/>
              </li>
              <li id="section-3-c">
                <h3>c. Affiliates and Business Transfer.</h3>
                <StyledMarkup v-html="apiData.options.section_three[2].copy"/>
              </li>
              <li id="section-3-d">
                <h3>d. Sweepstakes, Contests and Promotions.</h3>
                <StyledMarkup v-html="apiData.options.section_three[3].copy"/>
              </li>
              <li id="section-3-e">
                <h3>e. Your California Privacy Rights.</h3>
                <StyledMarkup v-html="apiData.options.section_three[4].copy"/>
              </li>
            </ol>
          </CopyWrapper>
        </div>
        <div id="section-4">
          <AnchorCopy :Data="apiData.options.sections[1]" :SectionNumber="'4'"/>
        </div>
        <div id="section-5">
          <AnchorCopy :Data="apiData.options.sections[2]" :SectionNumber="'5'"/>
        </div>
        <div id="section-6">
          <AnchorCopy :Data="apiData.options.sections[3]" :SectionNumber="'6'"/>
        </div>
        <div id="section-7">
          <AnchorCopy :Data="apiData.options.sections[4]" :SectionNumber="'7'"/>
        </div>
        <div id="section-8">
          <AnchorCopy :Data="apiData.options.sections[5]" :SectionNumber="'8'"/>
        </div>
        <div id="section-9">
          <AnchorCopy :Data="apiData.options.sections[6]" :SectionNumber="'9'"/>
        </div>
        <div id="section-10">
          <AnchorCopy :Data="apiData.options.sections[7]" :SectionNumber="'10'"/>
        </div>
        <div id="section-11">
          <AnchorCopy :Data="apiData.options.sections[8]" :SectionNumber="'11'"/>
        </div>
      </PrivacySection>
    </SectionWrap>
  </PageWrapper>
</template>

<script>
/* eslint-disable */
import { mapState } from 'vuex'
import { StyledTitle, SectionWrap, StyledMarkup } from '@/styles/components'
import AnchorCopy from './privacy/AnchorCopy'
import { PrivacySection, CopyWrapper, ScrollButton } from './privacy/privacy-styles'
import { colors } from '@/styles/theme'
import PageWrapper from '@/components/PageWrapper'
import CloseBack from '@/components/CloseBack'

// VUE
export default {
  components: {
    StyledTitle,
    SectionWrap,
    PageWrapper,
    CloseBack,
    AnchorCopy,
    StyledMarkup,
    PrivacySection,
    CopyWrapper,
    ScrollButton
  },
  data () {
    return {
      colorBg: colors.fc[2],
      xColor: colors.fc[6]
    }
  },
  computed: {
    ...mapState([
      'apiData'
    ])
  }
}
</script>
