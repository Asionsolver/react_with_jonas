import Text from "./Text";
import Emoji from "./Emoji";
import Bracket from "./Bracket";

export default function App() {
  return (
    <div>
      <Emoji>
        {({ addEmoji }) => (
          <Bracket>
            {({ addBracket }) => (
              <Text addEmoji={addEmoji} addBracket={addBracket} />
            )}
          </Bracket>
        )}
      </Emoji>
    </div>
  );
}
