import { Page, Card, Button } from '@shopify/polaris';
import { useState } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  return (
    <Page title="My App">
      <Card sectioned>
        <p>Count: {count}</p>
        <Button onClick={() => setCount(count + 1)}>Increase Count</Button>
      </Card>
    </Page>
  );
}

export default MyComponent;
