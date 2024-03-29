import { PostSection } from "./styles";

interface PropsPostsList {
  data: Record<string, any>;
}

export default function PostsList({ data }: PropsPostsList) {
  return (
    <div>
      <PostSection>
        <h1>{data.title[0].text}</h1>
        <span>{data.description[0].text}</span>
      </PostSection>
    </div>
  );
}
