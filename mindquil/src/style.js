const styles = {
  boxWidth: 'xl:max-w-[1280px] w-full',

  heading2:
    'flex justify-center items-center font-poppins font-semibold xs:text-[48px] text-[40px]text-black sm:leading-[44.8px] leading-[36.8px] w-full',
  paragraph:
    'font-poppins font-normal text-offwhite text-[18px] leading-[20.8px] w-5%',

  newsletter: 'font poppins font-bold text-[28px]',
  button:
    'py-2  px-6 mt-4 mb-6  font-poppins font-medium text-[18px] text-white bg-limeGreen rounded-[20px] outline-none hover:opacity-80 hover:font-medium',

  button2:
    'py-2  px-6 mt-4 mb-6  font-poppins font-medium text-[18px] text-white bg-limeGreen rounded-[20px] outline-none',

  flexCenter: 'flex justify-center items-center',
  flexStart: 'flex justify-center items-start',
  flexButton: 'flex justify-start items-start',

  paddingX: 'sm:px-20 px-6',
  paddingY: 'sm:py-16 py-6',
  padding: 'sm:px-16 px-6 sm:py-12 py-4',

  marginX: 'sm:mx-16 mx-6',
  marginY: 'sm:my-16 my-6',
};

export const layout = {
  section: `flex md:flex-row flex-col ${styles.paddingY}`,
};

export const register = {
  valid: 'text-white ml-[0.25rem]',
  invalid: 'text-red ml-[0.25rem]',
  info: 'font-[0.75rem] rounded-lg bg-primary text-white p-[0.25rem] relative bottom-[-10px]',
  offscreen: 'absolute left-[-9999px]',
  inputC:
    'text-white border-solid rounded-xl border-white border-2 bg-shamrockGreen focus:ring-3 focus:ring-lime-800 p-[6px] w-[20rem] mb-[10px]',
};

export default styles;
