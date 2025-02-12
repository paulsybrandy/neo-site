import {
  GradientText,
  HeroAvatar,
  HeroSocial,
  Section,
} from 'astro-boilerplate-components';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          Hi there, I'm <GradientText>Paul Sybrandy aka. Neocube</GradientText>{' '}
          👋
        </>
      }
      description={
        <>
          Hi, I'm Paul, a technophile from the United States.
          <br />
          My preferred tools are:
          <ul class="list-inside list-disc">
            <li>JavaScript</li>
            <li>React</li>
            <li>Astro</li>
            <li>svelte</li>
            <li>Good ol' HTML</li>
          </ul>
          <br></br>
          Beyond my love of everything tech, in terms of my professional life, I
          have found fulfillment in the aluminum can manufacturing industry. It
          is a career that I truly enjoy and find rewarding. Additionally, I am
          proud to say that I am a recovering addict, demonstrating my strength
          and determination in overcoming challenges. Through my experiences and
          interests, I continue to grow and strive for personal and professional
          success.
        </>
      }
      avatar={
        <img
          src="/assets/images/avatar.png"
          alt="Avatar image"
          loading="lazy"
        />
      }
      socialButtons={
        <>
          <a href="https://bsky.app/profile/paulneocube.bsky.social">
            <HeroSocial src="/assets/images/bluesky.png" alt="Bluesky icon" />
          </a>
          <a href="https://reddit.com/u/paulsybrandy1980">
            <HeroSocial src="/assets/images/Reddit.png" alt="Reddit icon" />
          </a>
          <a href="https://linkedin.com/in/paulgsybrandy">
            <HeroSocial
              src="/assets/images/linkedin-icon.png"
              alt="Linkedin icon"
            />
          </a>
          <a href="https://wa.me/15703350105">
            <HeroSocial src="/assets/images/Whatsapp.png" alt="Whatsapp icon" />
          </a>
          <a href="">
            <HeroSocial src="/assets/images/WeChat.png" alt="WeChat icon" />
          </a>
          <a href="viber://chat?number=%2B15703350105">
            <HeroSocial src="/assets/images/Viber.png" alt="Viber icon" />
          </a>
          <a href="/">
            <HeroSocial src="/assets/images/Zoom.png" alt="Zoom icon" />
          </a>
          <a href="/">
            <HeroSocial src="/assets/images/meet.png" alt="Meet icon" />
          </a>
          <a href="/">
            <HeroSocial src="/assets/images/Telegram.png" alt="Telegram icon" />
          </a>
          <a href="/">
            <HeroSocial src="/assets/images/Tiktok.png" alt="Tiktok icon" />
          </a>
          <a href="/">
            <HeroSocial src="/assets/images/codepen.png" alt="Codepen icon" />
          </a>
          <a href="/">
            <HeroSocial src="/assets/images/github.png" alt="Github icon" />
          </a>
        </>
      }
    />
  </Section>
);

export { Hero };
