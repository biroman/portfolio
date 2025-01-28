import { LinkedinLogo, Envelope, GithubLogo } from "@phosphor-icons/react";

const footer = () => {
  return (
    <div className="pt-2 pb-2 border-t">
      <footer>
        <div className="flex flex-row mt-8 mb-8">
          <div className="flex container mx-auto flex-start">
            👨🏻‍💻 by Eivind Buodd
          </div>
          <div className="flex flex-row flex-end gap-8">
            <a href="https://www.linkedin.com/in/eivind-buodd" target="_blank">
              {" "}
              <LinkedinLogo
                className="hover:filter hover:brightness-50 transition-all duration-300"
                size={24}
              />
            </a>
            <a href="mailto:eivind@buodd.no">
              {" "}
              <Envelope
                className="hover:filter hover:brightness-50 transition-all duration-300"
                size={24}
              />
            </a>
            <a href="https://github.com/biroman" target="_blank">
              {" "}
              <GithubLogo
                className="hover:filter hover:brightness-50 transition-all duration-300"
                size={24}
              />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default footer;
