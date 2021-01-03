export default function CopyrightFooter() {
  return (
    <section className="content flex flex-col md:flex-row  justify-between items-center pt-8 pb-2 mb-28 lg:mb-2">
      <span className="text-xs">© 2020 Animed. All right reserved.</span>
      <span className="text-xs mt-2 md:mt-0">
        Made with ❤️ by
        <a
          href="https://www.gentlemans-code.co/"
          target="_blank"
          className="ml-1 font-bold hover:text-blue-500 duration-300"
        >
          Gentleman's Code.
        </a>
      </span>
    </section>
  );
}
