import type { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Enes Furkan",
  lastName: "Ekin",
  name: "Enes Furkan Ekin",
  role: "Backend & Full-Stack Developer",
  avatar: "/images/avatar.jpg",
  email: "enesfurkan3756@gmail.com",
  location: "Europe/Istanbul",
  languages: [],
  locale: "tr",
};

const newsletter: Newsletter = {
  display: false,
  title: <>Bültenime Abone Olun</>,
  description: <>Yazılım geliştirme ve projelerim hakkındaki güncellemeler</>,
};

const social: Social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/Furkanekiin",
    essential: true,
  },
  {
    name: "Gumroad",
    icon: "globe",
    link: "https://furkanite05.gumroad.com/",
    essential: true,
  },
  {
    name: "Fiverr",
    icon: "globe",
    link: "https://www.fiverr.com/s/wkXp10A",
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Ana Sayfa",
  title: `${person.name} – Portfolyo`,
  description: "Backend ve web geliştirme projelerimi sergilediğim kişisel portfolyom",
  headline: <>Ölçeklenebilir backend sistemleri ve dijital ürünler inşa ediyorum</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Smart Transport </strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Öne Çıkan Proje
        </Text>
      </Row>
    ),
    href: "/work/smart-transport",
  },
  subline: (
    <>
      Merhaba, ben {person.firstName}. Node.js, Express ve PostgreSQL ile güçlü backend mimarileri ve{" "}
      <Text as="span" size="xl" weight="strong">SaaS çözümleri</Text> geliştiriyorum.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "Hakkımda",
  title: `Hakkımda – ${person.name}`,
  description: `Tanışın: ${person.name}, ${person.role}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Giriş",
    description: (
      <>
        {person.firstName}, karmaşık backend süreçlerini ve veritabanı mimarilerini güvenli, performanslı ve ölçeklenebilir dijital ürünlere dönüştüren bir yazılım geliştiricidir. 
        Özellikle kimlik doğrulama sistemleri, SaaS abonelik altyapıları ve modern web teknolojileri üzerine odaklanmaktadır.
      </>
    ),
  },
  work: {
    display: false,
    title: "İş Deneyimi",
    experiences: [],
  },
  studies: {
    display: false,
    title: "Eğitim",
    institutions: [],
  },
  technical: {
    display: true,
    title: "Teknik Yetkinlikler",
    skills: [
      {
        title: "Backend & Mimari",
        description: (
          <>Node.js ve Express.js ile modüler sunucu altyapıları ve güvenli API geliştirme.</>
        ),
        tags: [
          { name: "Node.js", icon: "nodejs" },
          { name: "JavaScript", icon: "javascript" },
        ],
        images: [],
      },
      {
        title: "Veritabanı & Ürünler",
        description: (
          <>PostgreSQL ile ilişki yönetimi, Stripe entegrasyonları ve ölçeklenebilir SaaS şablonları.</>
        ),
        tags: [
          { name: "PostgreSQL", icon: "postgresql" },
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: `Blog – ${person.name}`,
  description: "Backend mimarileri, SaaS geliştirme süreçleri ve yazılım dünyası üzerine düşüncelerim",
};

const work: Work = {
  path: "/work",
  label: "Projeler",
  title: `Projeler – ${person.name}`,
  description: "Node.js, PostgreSQL ve modern web teknolojileriyle geliştirdiğim projeler ve starter kitler",
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/post-01.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/post-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/post-03.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/post-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/post-0.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/post-06.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/post-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};
export { person, social, newsletter, home, about, blog, work, gallery };
