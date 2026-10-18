import React from "react";

const AboutMe: React.FC = () => (
  <section id="about" className="px-4 section-offset">
    <div className="mx-auto w-full max-w-3xl">
      <div className="text-center">
        <h2 className="text-xl font-semibold">About me</h2>

        <p className="mx-auto mt-3 max-w-3xl text-gray-200/90">
          I'm Bart, a software developer focused on backend development.
          Most of my experience is in building REST APIs with Java and microservices with Python.
          My work covers application development through to deployment on AWS.
        </p>

        <p className="mx-auto mt-3 max-w-3xl text-gray-200/90">
          I have solid hands-on experience with AWS serverless, particularly Lambda, DynamoDB and API Gateway.
          I also work with services such as S3, IAM and Step Functions, and use Terraform and CI/CD for
          infrastructure and deployments. I hold the AWS Certified Developer - Associate and
          Solutions Architect - Associate certifications.
        </p>

        <p className="mx-auto mt-3 max-w-3xl text-gray-200/90">
          Outside work, I enjoy exploring lower-level programming with C++ and putting physics into code.
          That led me to build a{" "}
          <a
            href="https://github.com/Verduttio/Spaceflight-simulator"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-white/40"
          >
            spaceflight simulator
          </a>{" "}
          with physics-based rocket flight.
        </p>

        <p className="mx-auto mt-3 max-w-3xl text-gray-200/90">
          Photography is another passion of mine. I share my photos on my{" "}
          <a
            href="https://foto.bszwaja.pl"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-white/40"
          >
            photography blog
          </a>
          . Feel free to take a look.
        </p>
      </div>
    </div>
  </section>
);

export default AboutMe;
