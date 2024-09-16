import { useState } from 'react';

function App() {
  const [showJaggedLittlePill, setShowJaggedLittlePill] = useState(false);
  const [showUnderRugSwept, setShowUnderRugSwept] = useState(false);

  const jaggedLittlePillSongs = [
    'All I Really Want',
    'You Oughta Know',
    'Perfect',
    'Hand in My Pocket',
    'Right Through You',
    'Forgiven',
    'You Learn',
    'Head over Feet',
    'Mary Jane',
    'Ironic',
    'Not the Doctor',
    'Wake Up'
  ];

  const underRugSweptSongs = [
    '21 Things I Want in a Lover',
    'Narcissus',
    'Hands Clean',
    'Flinch',
    'So Unsexy',
    'Precious Illusions',
    'That Particular Time',
    'A Man',
    'You Owe Me Nothing in Return',
    'Surrendering',
    'Utopia'
  ];

  return (
    <div>
      <h1 style={{ marginLeft: '50px' }}>My Tunes</h1>
      <div>
        <img
          src="/Alanis.jpg"
          alt="Alanis Morissette"
          style={{ width: '200px', marginLeft: '50px' }}
        />
        <p
          style={{
            fontSize: '24px',
            fontWeight: 'bold',
            margin: '0',
            marginLeft: '280px',
            marginTop: '-300px',
          }}
        >
          Alanis Morissette
        </p>
      </div>

      {/* Jagged Little Pill Album */}
      <div>
        <h2
          onClick={() => setShowJaggedLittlePill(!showJaggedLittlePill)}
          style={{ marginLeft: '280px', fontWeight: 'normal' }}
        >
          Jagged Little Pill
        </h2>
        {showJaggedLittlePill && (
          <ol style={{ marginLeft: '280px' }}>
            {jaggedLittlePillSongs.map((song, index) => (
              <li key={index}>{song}</li>
            ))}
          </ol>
        )}
      </div>

      {/* Under Rug Swept Album */}
      <div>
        <h2
          onClick={() => setShowUnderRugSwept(!showUnderRugSwept)}
          style={{ marginLeft: '280px', fontWeight: 'normal' }}
        >
          Under Rug Swept
        </h2>
        {showUnderRugSwept && (
          <ol style={{ marginLeft: '280px' }}>
            {underRugSweptSongs.map((song, index) => (
              <li key={index}>{song}</li>
            ))}
          </ol>
        )}
      </div>
    </div>
  );
}

export default App;


  