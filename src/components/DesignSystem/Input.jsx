import React from 'react';
// /** @jsx jsx */
// import { jsx } from 'theme-ui';
// import { Grid } from 'theme-ui';
import { Container, Grid } from 'semantic-ui-react';
import Input from '../Input/Input';

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
        <Input
          id="field1"
          title="field 1 title"
          placeholder="Type something…"
          description="Optional help text"
          required
        />
        <Input
          id="field2"
          title="field 2 title"
          variant="styles.input.hovered"
        />
        <Input
          id="field3"
          title="field 3 title"
          variant="styles.input.focused"
        />
        <Input
          id="field4"
          title="field 4 title"
          disabled
          description="Optional help text"
        />
      </Grid>
      <Grid width={[128, null, 192]} gap={2}>
        <Input
          id="field1"
          title="field 1 title"
          placeholder="Type something…"
          description="Optional help text"
          required
          value="Filled with value A"
        />
        <Input
          id="field2"
          title="field 2 title"
          variant="styles.input.hovered"
          required
        />
        <Input
          id="field3"
          title="field 3 title"
          variant="styles.input.focused"
          required
        />
      </Grid>
      <Grid width={[128, null, 192]} gap={2}>
        <Input
          id="field1"
          title="field 1 title"
          placeholder="Type something…"
          description="Optional help text"
          required
          value="Filled with value A"
          error={['This is the error']}
        />
        <Input
          id="field2"
          title="field 2 title"
          error={['This is the error']}
          variant="styles.input.hovered"
        />
        <Input
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
