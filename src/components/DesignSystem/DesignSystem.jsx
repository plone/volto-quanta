/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Grid } from 'theme-ui';
import { Container } from 'semantic-ui-react';
import Input from '../Input/Input';

const DesignSystem = () => {
  return (
    <Container>
      <Grid width={[128, null, 192]} gap={2} sx={{ pb: 4 }}>
        <span>default</span>
        <span>hover</span>
        <span>focus</span>
        <span>disabled</span>
      </Grid>

      <Grid width={[128, null, 192]} gap={2}>
        <Input
          id="field1"
          placeholder="Type something…"
          description="Optional help text"
          required
        />
        <Input id="field2" variant="hovered" />
        <Input id="field3" variant="focused" />
        <Input id="field4" disabled description="Optional help text" />
      </Grid>
    </Container>
  );
};

export default DesignSystem;
