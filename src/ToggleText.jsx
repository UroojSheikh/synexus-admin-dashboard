import { useState } from 'react';

function ToggleText() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>
        Show/Hide
      </button>

      {isVisible && <p>This text only shows when isVisible is true.</p>}
    </div>
  );
}

export default ToggleText;