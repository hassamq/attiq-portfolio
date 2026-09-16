import Link from "next/link";

const tornPath = `M2.5 10.2
  C18 4.8 28 12.5 42 7.6
  C55 3.2 66 11.8 80 6.4
  C94 1.5 105 10.2 120 5.8
  C135 1.8 146 11 160 6.2
  C174 1.6 186 10.8 200 5.5
  C214 1.2 226 11.4 240 6.8
  C254 2.6 266 11.2 280 6.1
  C294 1.8 306 9.8 317.5 8.4
  L317.5 45.8
  C306 50.2 294 42.6 280 48.2
  C266 53.4 254 44.8 240 49.6
  C226 54.1 214 45.2 200 50.4
  C186 55.2 174 45.6 160 50.2
  C146 54.6 135 45.4 120 50.6
  C105 55.4 94 46.2 80 50.8
  C66 55.1 55 45.8 42 50.4
  C28 54.6 18 46.8 2.5 49.2
  Z`;

type TornButtonProps = {
  href: string;
  children: React.ReactNode;
  external?: boolean;
};

export function TornButton({ href, children, external = false }: TornButtonProps) {
  const content = (
    <>
      <svg
        className="torn-btn__shape"
        viewBox="0 0 320 56"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path d={tornPath} />
      </svg>
      <span className="torn-btn__label">{children}</span>
    </>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="torn-btn">
        {content}
      </a>
    );
  }

  if (href.startsWith("mailto:")) {
    return (
      <a href={href} className="torn-btn">
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className="torn-btn">
      {content}
    </Link>
  );
}
