import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import type { Document } from '@contentful/rich-text-types';

interface RichTextProps {
  content: Document;
}

export function RichText({ content }: RichTextProps) {
  return <div>{documentToReactComponents(content)}</div>;
} 