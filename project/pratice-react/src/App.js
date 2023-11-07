import Text from "./components/inheritance/Text";
import Emoji from "./components/inheritance/Emoji";
import Bracket from "./components/inheritance/Bracket";

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
