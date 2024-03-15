import Link from "next/link";
import { JSX, SVGProps } from "react";

export default function Footer_Links() {
  return (
    <footer className="bg-transparent">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-700 pt-4 text-white">
          <div className="flex flex-col md:flex-row items-center md:space-x-10">
            <Logo/>
            <p className="text-sm mt-4 md:mt-0 md:mb-0 mb-4">
              © 2024 SmartHive. All Rights Reserved. | Created By Belong Sable
            </p>
          </div>
          <div className="flex space-x-6">
            <Link className="text-white hover:text-gray-300" href="#">
              <FacebookIcon className="h-6 w-6" />
            </Link>
            <Link className="text-white hover:text-gray-300" href="#">
              <LinkedinIcon className="h-6 w-6" />
            </Link>
            <Link className="text-white hover:text-gray-300" href="#">
              <XIcon className="h-6 w-6" />
            </Link>
          </div>
          <div className="flex mt-4 md:mt-0">
            <Link
              className="text-sm text-white hover:text-gray-300 mr-4"
              href="#"
            >
              Privacy Policy
            </Link>
            <Link
              className="text-sm text-white hover:text-gray-300 mr-4"
              href="#"
            >
              Terms and Conditions
            </Link>
            <Link
              className="text-sm text-white hover:text-gray-300 mr-4"
              href="#"
            >
              Return Refund Policy
            </Link>
            <Link className="text-sm text-white hover:text-gray-300" href="#">
              Shipping Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}


const Logo = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={40}
      height={46}
      fill="none"
      {...props}
    >
      <g clipPath="url(#a)">
        <path
          fill="#fff"
          d="M34.271 10.3a.93.93 0 0 1-.309-.388.985.985 0 0 1-.081-.392V.775a.75.75 0 0 0-.244-.548.866.866 0 0 0-.59-.227H29.16a.866.866 0 0 0-.59.227c-.146.136-.125 4.444-.122 5.15a.09.09 0 0 1-.146.071l-6.19-4.74A3.488 3.488 0 0 0 19.993 0c-.773 0-1.521.25-2.118.707L.302 14.178a.79.79 0 0 0-.205.234.736.736 0 0 0-.06.59.76.76 0 0 0 .154.267l1.77 2.003c.07.079.156.144.252.192a.88.88 0 0 0 .923-.086L19.466 4.86a.886.886 0 0 1 .531-.175c.193 0 .38.062.531.175L36.86 17.378a.856.856 0 0 0 .286.143.895.895 0 0 0 .635-.056.822.822 0 0 0 .252-.19l1.77-2.004a.726.726 0 0 0 .09-.86c-.046-.08-4.589-3.364-5.62-4.112Z"
        />
        <path
          fill="#fff"
          d="M19.876 32.889c-1.74 0-3.356-.202-4.85-.604a14.143 14.143 0 0 1-2.712-1.046c-1.065-.539-1.65-1.68-1.65-2.874V26.65a1.842 1.842 0 0 1 3.661-.288l.125.789c.121.765.547 1.467 1.258 1.774.37.16.773.3 1.208.422.911.25 1.898.375 2.96.375 1.04 0 1.91-.136 2.61-.408.712-.283 1.255-.675 1.628-1.176.374-.5.56-1.094.56-1.78 0-.63-.163-1.191-.49-1.681-.327-.49-.87-.925-1.628-1.306-.76-.392-1.787-.752-3.082-1.078-1.904-.479-3.497-1.045-4.782-1.698-1.272-.653-2.235-1.437-2.89-2.352-.641-.914-.962-1.991-.962-3.232 0-1.274.367-2.4 1.103-3.38.747-.98 1.78-1.753 3.1-2.319 1.319-.566 2.843-.854 4.57-.865 1.892-.022 3.561.207 5.01.686a13.96 13.96 0 0 1 2.279.965c.935.505 1.415 1.535 1.415 2.598v1.595a1.83 1.83 0 0 1-3.626.34l-.136-.715c-.136-.72-.552-1.374-1.234-1.642a9.12 9.12 0 0 0-.853-.284c-.759-.229-1.658-.343-2.697-.343-.887 0-1.67.136-2.347.408-.677.272-1.208.659-1.593 1.16-.386.49-.578 1.077-.578 1.763 0 .599.17 1.121.508 1.567.338.447.905.855 1.699 1.225.793.36 1.868.724 3.222 1.094 2.767.686 4.863 1.633 6.287 2.841 1.424 1.208 2.136 2.749 2.136 4.62 0 1.318-.385 2.472-1.155 3.463-.76.98-1.833 1.741-3.223 2.285-1.377.545-2.994.817-4.85.817Z"
        />
        <path
          fill="#0079DA"
          d="M7.437 34.747c6.969 5.917 17.433 5.802 24.246-.253a.918.918 0 0 0 .018-1.36l-2.085-1.976a.99.99 0 0 0-1.32-.033c-4.969 4.316-12.493 4.385-17.555.182a.989.989 0 0 0-1.319.061l-2.035 2.019a.918.918 0 0 0 .05 1.36Z"
        />
        <path
          fill="#0079DA"
          d="M38.576 38.748c-10.636 9.668-27.186 9.67-37.826 0a.927.927 0 0 1-.022-1.356l2.057-2.005a.988.988 0 0 1 1.345-.023c8.766 7.892 22.301 7.89 31.065 0a.988.988 0 0 1 1.345.023l2.057 2.005a.927.927 0 0 1-.021 1.356ZM19.663 28.889c1.534 0 2.777-1.144 2.777-2.556 0-1.411-1.243-2.555-2.777-2.555s-2.777 1.144-2.777 2.555c0 1.412 1.243 2.556 2.777 2.556Z"
        />
        <path
          fill="#fff"
          d="m12.22 36.451.06-.173.24.037.542-1.58-.214-.115.06-.175.73.243-.06.175-.24-.037-.238.693.972.324.238-.693-.215-.114.06-.175.228.076.276.092.227.076-.06.175-.24-.038-.543 1.58.215.115-.06.174-.73-.244.059-.173.241.037.231-.674-.972-.324-.231.674.214.115-.06.173-.73-.244ZM16.886 37.686l.022-.204.27-.017.204-1.853-.26-.073.022-.206.853.092-.023.206-.27.016-.205 1.853.261.074-.022.204-.852-.092ZM21.07 37.778l-.887-2.019-.169-.007-.018-.203.662-.072.018.203-.189.054.6 1.426.065.179.009-.001.035-.19.355-1.532-.215-.008-.018-.203.66-.072.018.203-.166.044-.516 2.171-.244.027ZM24.695 37.111l-.06-.183.21-.124-.551-1.668-.237.042-.062-.184 1.48-.55.168.51-.217.08-.125-.277-.738.274.227.69.737-.274.075.226-.737.273.253.767.782-.29-.066-.304.215-.08.168.507-1.521.565Z"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h40v46H0z" />
        </clipPath>
      </defs>
    </svg>
  )

function FacebookIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}


function LinkedinIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function SlackIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="3" height="8" x="13" y="2" rx="1.5" />
      <path d="M19 8.5V10h1.5A1.5 1.5 0 1 0 19 8.5" />
      <rect width="3" height="8" x="8" y="14" rx="1.5" />
      <path d="M5 15.5V14H3.5A1.5 1.5 0 1 0 5 15.5" />
      <rect width="8" height="3" x="14" y="13" rx="1.5" />
      <path d="M15.5 19H14v1.5a1.5 1.5 0 1 0 1.5-1.5" />
      <rect width="8" height="3" x="2" y="8" rx="1.5" />
      <path d="M8.5 5H10V3.5A1.5 1.5 0 1 0 8.5 5" />
    </svg>
  );
}

function XIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M18 6 6 18" />
        <path d="m6 6 12 12" />
      </svg>
    )
  }
