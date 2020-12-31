import ReactMarkdown from 'react-markdown';
type Props = {
  text?: string;
  markdown?: string;
};

export default function AboutUsContext({ text, markdown }: Props) {
  return (
    <article className="py-20 pb-10">
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </article>
  );
}
