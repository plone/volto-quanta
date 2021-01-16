/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Grid } from 'theme-ui';
import { Container } from 'semantic-ui-react';
import TextArea from '../TextArea/TextArea';

const DesignSystem = () => {
  return (
    <Container>
      <Grid width={[128, null, 192]} gap={2}>
        <span>default</span>
        <span>hover</span>
        <span>focus</span>
        <span>disabled</span>
      </Grid>
      <Grid width={[128, null, 192]} gap={2}>
        <TextArea
          id="field1"
          title="field 1 title"
          placeholder="Type something…"
          description="Optional help text"
          required
        />
        <TextArea
          id="field1"
          title="field 1 title"
          placeholder="Type something…"
          description="Optional help text"
          required
          value="Filled with value A"
          error={['This is the error']}
        />
        <TextArea
          id="field2"
          title="field 2 title"
          error={['This is the error']}
          variant="styles.input.hovered"
        />
        <TextArea
          id="field3"
          title="field 3 title"
          error={['This is the error']}
          variant="styles.input.focused"
        />
      </Grid>
    </Container>
  );
};

export default DesignSystem;
