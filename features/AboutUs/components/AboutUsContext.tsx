import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';

const Markdown = styled(ReactMarkdown)`
  & p {
    font-size: 14px;
    margin-bottom: 16px;
    font-weight: 300;
  }
`;

type Props = {
  text?: string;
  markdown?: string;
};

export default function AboutUsContext({ text, markdown }: Props) {
  return (
    <article className="py-20 pb-10">
      <Markdown>{markdown}</Markdown>
    </article>
  );
}
