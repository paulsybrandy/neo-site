import { GradientText, Section } from 'astro-boilerplate-components';

const Sponsors = () => (
  <Section
    title={
      <>
        Hot <GradientText>Links</GradientText>
      </>
    }
  >
    {' '}
    <i>
      <b>
        <u>under construction - buttons not currently finished</u>
      </b>
    </i>
    <div>
      {/* IFrame Section */}
      <section
        style={{
          padding: '20px',
          border: '1px solid #ccc',
          borderRadius: '5px',
        }}
      >
        <iframe
          src="https://paulsybrandy.com/buttons/index.html"
          title="Buttons"
          width="100%"
          height="200px"
          style={{ border: 'none' }}
        />
      </section>
    </div>
  </Section>
);

export { Sponsors };
