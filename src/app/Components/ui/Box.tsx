import React from "react";

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/kqTb62BNYvs
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
export default function Box() {
  const home = "Home's";
  const lets = "Let's";
  const well = "We'll";
  return (
    <div className=" bg-neutral-700 bg-opacity-10 rounded-[50px] border border-black border-opacity-10 backdrop-blur-[30.80px]  text-white p-12 mt-6">
      <h2 className="text-2xl font-bold text-center ">Power Up Your Circuit</h2>
      <p className="p-4 text-center md:text-lg text-xs">
        Upgrade Your Smart Circuit With Smart Hive. Seamless Installation,
        Top-Tier Products, And Expert Guidance, Unlocking Your {home} Full
        Potential. {lets} Create A Connected Haven, Together.
      </p>
      <div className="mt-12 grid md:grid-cols-3 gap-8 grid-cols-2">
        <div>
          <Phone/>
          <h3 className="text-2xl font-semibold mt-8">
            Monitoring Application
          </h3>
          <p className="mt-2 text-sm text-slate-400">
            Control And Monitor Your Smart Homes From Anywhere With
            User-Friendly Mobile App Available For IOS And Android.
          </p>
        </div>
        <div>
          <Product_Marketplace />
          <h3 className="text-2xl font-semibold mt-10">Product Marketplace</h3>
          <p className="mt-2 text-sm text-slate-400">
            We Design With Iotics And Deliver Innovative Home Automation
            Solutions For Optimal Performance And An Effortless User Experience.
          </p>
        </div>
        <div>
          <Delivery />
          <h3 className="text-2xl font-semibold mt-6">Delivery</h3>
          <p className="mt-28 md:mt-2 text-sm text-slate-400">
            Our Efficient Delivery System Ensures You Can Quickly And Easily
            Upgrade Your Home With The Latest Smart Technology.
          </p>
        </div>
        <div>
          <Acc_test />
          <h3 className="text-2xl font-semibold mt-10">
            Quality Assurance And Testing
          </h3>
          <p className="mt-10 text-sm text-slate-400">
            Rest Assured, Your Smart Hive Products Undergo Rigorous Testing,
            Including Both Automated And Manual Checks, To Guarantee A Smooth
            And Reliable Experience.
          </p>
        </div>
        <div>
          <Strategy />
          <h3 className="text-2xl font-semibold mt-10">
            Product Strategy And Consulting
          </h3>
          <p className="mt-2 text-sm text-slate-400">
            Get Expert Advice And Support To Set Up Your Perfect Smart Home.{" "}
            {well} Guide You Through Choosing The Right Products For Your Needs,
            Prioritizing Features, And Ensuring Your Home Is Secure.
          </p>
        </div>
        <div>
          <Chat />
          <h3 className="text-2xl font-semibold mt-10">
            Maintenance And Support
          </h3>
          <p className="mt-10 text-sm text-slate-400">
            Get Ongoing Support And Have Your Questions Answered Instantly
            Through Our Convenient Website Chat. We Offer Timely Bug Fixes,
            Updates, And Security Enhancements To Keep Your Smart Home Running
            Smoothly.
          </p>
        </div>
      </div>
    </div>
  );
}

const Phone = (
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={66}
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fill="url(#b)"
        d="M40 32.974v24.08c0 5.517-3.429 8.92-8.961 8.946H8.987C3.507 66 0 62.545 0 57.183V8.869C0 3.455 3.455 0 8.91 0h22.18C36.546 0 40 3.455 40 8.895v24.08ZM3.896 11.112v38.027h32.208V11.112H3.896Zm16.13 49.526c2.13 0 3.792-1.625 3.792-3.713 0-2.063-1.74-3.764-3.818-3.738a3.711 3.711 0 0 0-3.688 3.686c-.026 2.14 1.558 3.765 3.714 3.765Z"
      />
    </g>
    <defs>
      <linearGradient
        id="b"
        x1={-16.024}
        x2={60.41}
        y1={78.155}
        y2={-19.074}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#2196F3" />
        <stop offset={0.967} stopColor="#4CAF50" />
      </linearGradient>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h40v66H0z" />
      </clipPath>
    </defs>
  </svg>
);

const Product_Marketplace = (
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={60}
    height={58}
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fill="url(#b)"
        d="M18.844 36.835a56.89 56.89 0 0 1 0-15.49h22.312c.73 5.13.706 10.262.024 15.49H18.844Z"
      />
      <path
        fill="url(#c)"
        d="M19.526 17.288c.975-4.275 2.266-8.307 4.848-11.825 3.629-4.96 7.648-4.96 11.253 0 2.581 3.518 3.872 7.55 4.847 11.825H19.526Z"
      />
      <path
        fill="url(#d)"
        d="M19.502 40.867h20.996c-1.242 5.106-2.704 10.042-6.576 13.78-2.558 2.492-5.262 2.444-7.868 0-3.093-2.932-4.555-6.743-5.772-10.702-.293-.977-.488-1.979-.78-3.078Z"
      />
      <path
        fill="url(#e)"
        d="M14.655 36.86H1.867C.43 31.729.43 26.573 1.843 21.345h12.812V36.86Z"
      />
      <path
        fill="url(#f)"
        d="M45.37 21.345h12.69c1.534 3.787 1.558 10.872.072 15.515H45.37V21.345Z"
      />
      <path
        fill="url(#g)"
        d="M23.204.82c-4.433 4.643-6.332 10.36-7.697 16.468H3.452C4.912 10.765 16.604.942 23.204.82Z"
      />
      <path
        fill="url(#h)"
        d="M36.723 57.457c4.506-4.715 6.406-10.457 7.77-16.541h12.08c-1.826 6.817-12.446 15.76-19.85 16.541Z"
      />
      <path
        fill="url(#i)"
        d="M36.771.771C44.59 2.042 53.407 9.03 56.622 17.288h-12.13c-1.34-6.059-3.239-11.825-7.72-16.517Z"
      />
      <path
        fill="url(#j)"
        d="M23.277 57.457c-7.38-.782-17.975-9.7-19.85-16.566.194-.024.39-.049.584-.049h11.497c1.34 6.084 3.215 11.875 7.77 16.615Z"
      />
    </g>
    <defs>
      <linearGradient
        id="b"
        x1={-3.004}
        x2={70.796}
        y1={63.751}
        y2={-13.228}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#2196F3" />
        <stop offset={0.967} stopColor="#4CAF50" />
      </linearGradient>
      <linearGradient
        id="c"
        x1={-10.607}
        x2={63.192}
        y1={56.462}
        y2={-20.518}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#2196F3" />
        <stop offset={0.967} stopColor="#4CAF50" />
      </linearGradient>
      <linearGradient
        id="d"
        x1={4.57}
        x2={78.37}
        y1={71.012}
        y2={-5.967}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#2196F3" />
        <stop offset={0.967} stopColor="#4CAF50" />
      </linearGradient>
      <linearGradient
        id="e"
        x1={-14.38}
        x2={59.419}
        y1={52.845}
        y2={-24.134}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#2196F3" />
        <stop offset={0.967} stopColor="#4CAF50" />
      </linearGradient>
      <linearGradient
        id="f"
        x1={8.357}
        x2={82.157}
        y1={74.643}
        y2={-2.336}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#2196F3" />
        <stop offset={0.967} stopColor="#4CAF50" />
      </linearGradient>
      <linearGradient
        id="g"
        x1={-20.271}
        x2={53.528}
        y1={47.197}
        y2={-29.782}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#2196F3" />
        <stop offset={0.967} stopColor="#4CAF50" />
      </linearGradient>
      <linearGradient
        id="h"
        x1={14.266}
        x2={88.065}
        y1={80.307}
        y2={3.328}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#2196F3" />
        <stop offset={0.967} stopColor="#4CAF50" />
      </linearGradient>
      <linearGradient
        id="i"
        x1={-4.276}
        x2={69.523}
        y1={62.531}
        y2={-14.448}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#2196F3" />
        <stop offset={0.967} stopColor="#4CAF50" />
      </linearGradient>
      <linearGradient
        id="j"
        x1={-1.714}
        x2={72.085}
        y1={64.987}
        y2={-11.992}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#2196F3" />
        <stop offset={0.967} stopColor="#4CAF50" />
      </linearGradient>
      <clipPath id="a">
        <path fill="#fff" d="M.771.771h58.457v56.686H.771z" />
      </clipPath>
    </defs>
  </svg>
);

const Delivery = (
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={72}
    height={72}
    fill="none"
    {...props}
  >
    <path
      fill="url(#a)"
      d="M0 0h8l1.6 8M16 40h40L72 8H9.6M16 40 9.6 8 16 40Zm0 0-9.172 9.172C4.308 51.692 6.093 56 9.657 56H56m0 0a8 8 0 1 0 0 16 8 8 0 0 0 0-16Zm-32 8a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z"
    />
    <defs>
      <linearGradient
        id="a"
        x1={-10.652}
        x2={104.971}
        y1={116.72}
        y2={33.603}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#2196F3" />
        <stop offset={0.967} stopColor="#4CAF50" />
      </linearGradient>
    </defs>
  </svg>
);

const Acc_test = (
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={62}
    height={62}
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fill="url(#b)"
        d="M49.228 0C56.238-.027 62 5.8 62 12.922c0 7.149-5.709 12.976-12.719 12.976-7.036 0-12.745-5.773-12.771-12.922C36.51 5.827 42.192.026 49.228 0ZM41.05 13.812c2.124 2.158 4.222 4.263 6.054 6.124 3.372-3.4 6.85-6.906 10.17-10.278-.85-.917-1.833-1.943-2.921-3.103-2.363 2.428-4.78 4.883-7.541 7.716-.93-1.241-1.832-2.401-2.735-3.588a187.077 187.077 0 0 1-3.027 3.13Z"
      />
      <path
        fill="url(#c)"
        d="M28.597 42.138c-2.284 6.367-4.54 12.68-6.797 18.992-.107.027-.213.027-.293.054a9991.99 9991.99 0 0 0-6.824-19.046h13.914Z"
      />
      <path
        fill="url(#d)"
        d="M9.426 26.033c3.32-.917 6.32-1.619 9.24-2.563 2.018-.647 3.904-.647 5.922 0 2.947.944 5.947 1.646 9.293 2.563a1204.48 1204.48 0 0 1-11.896 3.992c-.238.081-.53.054-.77-.026-3.797-1.268-7.594-2.563-11.789-3.966Z"
      />
      <path
        fill="url(#e)"
        d="M1.779 38.82c3.346.971 6.691 1.942 10.01 2.94.319.082.638.486.77.81 1.939 5.395 3.877 10.79 5.603 16.321-5.496-6.61-11.02-13.219-16.516-19.828.053-.081.08-.162.133-.243Z"
      />
      <path
        fill="url(#f)"
        d="M41.66 39.063c-5.496 6.61-11.018 13.219-16.727 20.098.133-.567.16-.863.239-1.106a1465.768 1465.768 0 0 1 5.47-15.161c.159-.432.53-.998.929-1.106 3.292-1.026 6.611-1.97 9.904-2.941.053.054.106.135.186.216Z"
      />
      <path
        fill="url(#g)"
        d="M13.382 39.09c-1.885-3.858-3.664-7.446-5.576-11.358 4.09 1.376 7.913 2.671 11.976 4.047-2.178 2.482-4.196 4.802-6.4 7.31Z"
      />
      <path
        fill="url(#h)"
        d="M23.499 31.806c4.01-1.376 7.833-2.644 11.948-4.047a2235.57 2235.57 0 0 0-5.576 11.33 781.24 781.24 0 0 0-6.372-7.283Z"
      />
      <path
        fill="url(#i)"
        d="M5.55 28.002c1.858 3.75 3.61 7.365 5.549 11.277C7.275 38.173 3.717 37.147 0 36.069c1.885-2.725 3.664-5.342 5.55-8.067Z"
      />
      <path
        fill="url(#j)"
        d="M37.731 28.002c1.885 2.752 3.664 5.315 5.55 8.066-3.691 1.08-7.25 2.105-11.1 3.238 1.912-3.912 3.665-7.5 5.55-11.304Z"
      />
      <path
        fill="url(#k)"
        d="M15.586 39.818c2.071-2.347 3.983-4.559 6.028-6.906a2511.45 2511.45 0 0 1 6.054 6.906H15.586Z"
      />
    </g>
    <defs>
      <linearGradient
        id="b"
        x1={-0.742}
        x2={65.647}
        y1={65.398}
        y2={-2.071}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#2196F3" />
        <stop offset={0.967} stopColor="#4CAF50" />
      </linearGradient>
      <linearGradient
        id="c"
        x1={2.287}
        x2={68.676}
        y1={68.378}
        y2={0.909}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#2196F3" />
        <stop offset={0.967} stopColor="#4CAF50" />
      </linearGradient>
      <linearGradient
        id="d"
        x1={-8.553}
        x2={57.836}
        y1={57.712}
        y2={-9.757}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#2196F3" />
        <stop offset={0.967} stopColor="#4CAF50" />
      </linearGradient>
      <linearGradient
        id="e"
        x1={-3.348}
        x2={63.041}
        y1={62.833}
        y2={-4.636}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#2196F3" />
        <stop offset={0.967} stopColor="#4CAF50" />
      </linearGradient>
      <linearGradient
        id="f"
        x1={6.824}
        x2={73.214}
        y1={72.843}
        y2={5.374}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#2196F3" />
        <stop offset={0.967} stopColor="#4CAF50" />
      </linearGradient>
      <linearGradient
        id="g"
        x1={-10.615}
        x2={55.774}
        y1={55.682}
        y2={-11.787}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#2196F3" />
        <stop offset={0.967} stopColor="#4CAF50" />
      </linearGradient>
      <linearGradient
        id="h"
        x1={-1.313}
        x2={65.076}
        y1={64.836}
        y2={-2.633}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#2196F3" />
        <stop offset={0.967} stopColor="#4CAF50" />
      </linearGradient>
      <linearGradient
        id="i"
        x1={-11.681}
        x2={54.709}
        y1={54.634}
        y2={-12.835}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#2196F3" />
        <stop offset={0.967} stopColor="#4CAF50" />
      </linearGradient>
      <linearGradient
        id="j"
        x1={4.128}
        x2={70.517}
        y1={70.189}
        y2={2.72}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#2196F3" />
        <stop offset={0.967} stopColor="#4CAF50" />
      </linearGradient>
      <linearGradient
        id="k"
        x1={-1.906}
        x2={64.483}
        y1={64.252}
        y2={-3.217}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#2196F3" />
        <stop offset={0.967} stopColor="#4CAF50" />
      </linearGradient>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h62v61.184H0z" />
      </clipPath>
    </defs>
  </svg>
);

const Strategy = (
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={61}
    height={62}
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fill="url(#b)"
        d="M8.524 50.952c0-3.511.436-6.877 1.865-9.977 2.034-4.48 4.335-8.815 6.587-13.174.17-.339.823-.533 1.284-.605 3.898-.606 6.708-2.713 8.693-6.2-.992-.654-1.937-1.308-2.954-1.986-.34.509-.63.92-.944 1.332-1.453 2.01-3.463 3.221-5.934 3.27-3.584.048-7.022.75-10.437 1.816-3.56 1.09-6.975-1.695-6.66-5.4.146-1.696 1.042-2.907 2.47-3.803 3.512-2.203 7.023-4.407 10.583-6.587.702-.436.993-.896.969-1.72-.073-1.96-.024-3.946-.024-6.03.363.074.63.098.847.219 3.27 1.404 6.248 3.196 8.04 6.466.146.266.606.484.945.533 5.594.726 10.122 6.441 9.444 12.132-.532 4.432-1.21 8.864-1.84 13.295-.702 5.158-.024 10.123 1.961 14.918.194.46.364.944.557 1.526-8.5-.025-16.879-.025-25.452-.025Z"
      />
      <path
        fill="url(#c)"
        d="M50.928 14.506h-5.28V0h14.41v14.457h-5.255v9.13h5.23v14.555h-5.23v9.154h5.255v14.506h-14.41v-14.41h5.304v-9.178h-5.376v-5.376h-5.473V43.59h-4.65c-.702-2.663-.774-5.424-.435-8.185.58-4.553 1.283-9.105 1.864-13.658.122-1.017.025-2.059.025-3.415 2.058 3.463 2.615 7.023 3.05 10.656h5.547V23.66h5.424v-9.154Z"
      />
      <path fill="url(#d)" d="M41.314 54.706v7.12H1.332v-7.12h39.982Z" />
    </g>
    <defs>
      <linearGradient
        id="b"
        x1={-11.877}
        x2={60.289}
        y1={62.289}
        y2={-9.877}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#2196F3" />
        <stop offset={0.967} stopColor="#4CAF50" />
      </linearGradient>
      <linearGradient
        id="c"
        x1={4.798}
        x2={76.964}
        y1={78.964}
        y2={6.798}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#2196F3" />
        <stop offset={0.967} stopColor="#4CAF50" />
      </linearGradient>
      <linearGradient
        id="d"
        x1={2.711}
        x2={74.877}
        y1={76.878}
        y2={4.711}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#2196F3" />
        <stop offset={0.967} stopColor="#4CAF50" />
      </linearGradient>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h60.058v61.85H0z" />
      </clipPath>
    </defs>
  </svg>
);

const Chat = (
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={74}
    height={62}
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fill="url(#b)"
        d="M36.967 49.44c-2.32-.522-4.641-1.076-6.962-1.5-.719-.13-1.569-.098-2.222.195-1.373.62-2.648 1.5-4.02 2.153-.556.26-1.504.359-1.93.065-.424-.326-.816-1.337-.62-1.826 1.47-3.653.229-6.457-1.667-9.784-4.25-7.436-3.66-15.165 1.634-21.98 5.295-6.85 12.617-9.132 20.984-7.045 8.237 2.055 13.173 7.599 14.742 15.882 2.32 12.36-7.159 23.546-19.939 23.84Zm-6.406-20.383c0-2.087-1.602-3.717-3.694-3.75-2.124-.033-3.89 1.663-3.856 3.783 0 2.12 1.732 3.783 3.89 3.75 2.091-.065 3.693-1.696 3.66-3.783Zm16.735 3.783c2.06 0 3.726-1.63 3.791-3.685.033-2.087-1.7-3.848-3.824-3.816-2.157 0-3.791 1.696-3.726 3.881.033 2.022 1.667 3.62 3.759 3.62Zm-10.198-.032c2.06-.033 3.726-1.696 3.726-3.75 0-2.088-1.732-3.816-3.857-3.784-2.026.033-3.726 1.729-3.758 3.75a3.832 3.832 0 0 0 3.889 3.784Z"
      />
      <path
        fill="url(#c)"
        d="M44.06 57.397c-.392 3-1.144 3.62-4.249 3.653-2.125 0-4.25.033-6.374 0-2.418-.065-3.301-1.174-3.268-4.044.032-2.25 1.078-3.294 3.301-3.327 3.465-.032 6.962.196 10.361-.847 7.42-2.283 13.172-6.718 15.787-13.991 3.367-9.294 3.007-18.459-4.15-26.188C48.504 5.185 39.875 2.61 30.07 5.48c-9.806 2.902-15.69 9.783-17.356 19.828-.49 2.902.326 6.033.653 9.034.262 2.413.752 4.826 1.079 7.24.327 2.282-.294 3.13-2.55 3.815-4.02 1.207-6.896.26-9.151-3.294C-.458 37.08-.883 31.666 1.47 26.22 2.713 23.318 5 21.46 8.237 20.872c.523-.098 1.078-.88 1.307-1.5C12.78 10.86 18.598 4.892 27.162 1.76c15.166-5.512 31.9 2.413 37.294 17.578.392 1.109.784 1.663 2.059 1.76 2.255.164 3.89 1.501 5.164 3.327 3.563 5.218 2.942 14.22-1.307 18.915-1.994 2.185-4.413 3.23-7.322 2.185-1.307-.489-1.993-.065-2.778 1.011-3.791 5.088-8.792 8.48-14.872 10.371-.36.098-.719.228-1.078.326a.713.713 0 0 0-.262.163Z"
      />
    </g>
    <defs>
      <linearGradient
        id="b"
        x1={6.376}
        x2={61.806}
        y1={62.258}
        y2={2.128}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#2196F3" />
        <stop offset={0.967} stopColor="#4CAF50" />
      </linearGradient>
      <linearGradient
        id="c"
        x1={8.19}
        x2={63.621}
        y1={63.931}
        y2={3.801}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#2196F3" />
        <stop offset={0.967} stopColor="#4CAF50" />
      </linearGradient>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h74v61.05H0z" />
      </clipPath>
    </defs>
  </svg>
);
