const SectionLayout = ({children, className=""}) => {
  return (
    <section
      className={`px-10 bg-backgroundColor py-28 ${className}`}
    >
      {children}
    </section>
  )
}

export default SectionLayout