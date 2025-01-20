import { LinkedinLogo, Envelope, GithubLogo } from "@phosphor-icons/react";

const footer = () => {
  return (
    <div className="pt-12 pb-12 border-t">
      <footer className="flex justify-center gap-10">
        <a href="https://www.linkedin.com/in/eivind-buodd" target="_blank">
          {" "}
          <LinkedinLogo
            className="hover:filter hover:brightness-50"
            size={24}
          />
        </a>
        <a href="mailto:eivind@buodd.no">
          {" "}
          <Envelope className="hover:filter hover:brightness-50" size={24} />
        </a>
        <a href="https://github.com/biroman" target="_blank">
          {" "}
          <GithubLogo className="hover:filter hover:brightness-50" size={24} />
        </a>
      </footer>
    </div>
  );
};

export default footer;
