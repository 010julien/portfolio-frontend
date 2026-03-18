import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Building2,
  GraduationCap,
  Briefcase,
  Users,
  Target,
  Rocket,
  Calendar,
  MapPin,
  ExternalLink,
  Globe,
  Mail,
  Linkedin,
  Github,
  ChevronRight,
  ChevronDown,
  Star,
  Award,
  BookOpen,
  Clock,
  Crown,
  Zap,
  Facebook,
  Twitter,
  Instagram,
  Phone,
} from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import FloatingTranslateButton from "../components/FloatingTranslateButton";

const CareerPage = ({ darkMode, toggleDarkMode }) => {
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState("companies");
  const [selectedCompany, setSelectedCompany] = useState(null);

  // Liste des entreprises/startups
  const companies = [
    {
      id: 1,
      name: "SylvaTeam",
      logo: "🚀",
      role: "CEO",
      fullRole:
        language === "fr"
          ? "Chief Technology Officer"
          : "Chief Technology Officer",
      period: language === "fr" ? "2024 - Présent" : "2024 - Present",
      location: "Lomé, Togo",
      slogan:
        language === "fr"
          ? "Transformer l'Afrique par la technologie"
          : "Transforming Africa through technology",
      description:
        language === "fr"
          ? "SylvaTeam est une groupe technologique innovante basée au Togo, spécialisée dans le développement de solutions digitales pour l'éducation, les services et la transformation numérique des entreprises africaines."
          : "SylvaTeam is an innovative technology groupe based in Togo, specialized in developing digital solutions for education, services, and the digital transformation of African businesses.",
      mission:
        language === "fr"
          ? "Créer des solutions technologiques accessibles et innovantes qui répondent aux défis uniques du continent africain."
          : "Create accessible and innovative technology solutions that address the unique challenges of the African continent.",
      color: "blue",
      website: "https://sylvateam.com",
      teamMembers: [
        {
          name: "ADOBOE Comlan Julien",
          role: "CEO",
          avatar: "👨‍💻",
          image: "/src/images/Julien.jpg",
          isYou: true,
          socials: {
            facebook: "#",
            twitter: "#",
            instagram: "#",
            linkedin: "#",
          },
        },
        {
          name: "Nicole Mia",
          role: language === "fr" ? "Bénévole" : "Volunteer",
          avatar: "👩‍💼",
          image: "",
          isYou: false,
          socials: { facebook: "#", twitter: "#", instagram: "#", phone: "#" },
        },
        {
          name: "Kotche Mercelin",
          role: "Lead Designer",
          avatar: "🎨",
          image: "",
          isYou: false,
          socials: { facebook: "#", twitter: "#", instagram: "#" },
        },
        // {
        //   name: "Sarah Johnson",
        //   role: "Backend Dev",
        //   avatar: "⚙️",
        //   image:
        //     "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
        //   isYou: false,
        //   socials: { facebook: "#", twitter: "#", instagram: "#" },
        // },
      ],
      projects: [
        {
          name: "TogoSchool",
          icon: "🎓",
          status: language === "fr" ? "En production" : "In production",
          statusColor: "green",
          description:
            language === "fr"
              ? "Plateforme éducative pour les écoles togolaises"
              : "Educational platform for Togolese schools",
        },
      ],
      technologies: ["React", "NestJS", "PostgreSQL", "Docker", "AWS"],
    },
    {
      id: 2,
      name: "Hustlers Corporation",
      logo: "/src/images/hustlers-logo.png",
      role: language === "fr" ? "Co-fondateur & CTO" : "Co-founder & CTO",
      fullRole:
        language === "fr"
          ? "Co-fondateur & Directeur Technique"
          : "Co-founder & Technical Director",
      period: language === "fr" ? "2023 - Présent" : "2023 - Present",
      location: "Paris, France",
      slogan:
        language === "fr"
          ? "L'innovation au service de demain"
          : "Innovation for tomorrow",
      description:
        language === "fr"
          ? "Description de votre deuxième startup. Modifiez ce texte pour décrire l'entreprise, son secteur d'activité et sa vision."
          : "Description of your second startup. Modify this text to describe the company, its sector and vision.",
      mission:
        language === "fr"
          ? "La mission de cette startup."
          : "The mission of this startup.",
      color: "purple",
      website: "#",
      teamMembers: [
        {
          name: "ADOBOE Comlan Julien",
          role: "CTO",
          avatar: "👨‍💻",
          image: "/src/images/Julien.jpg",
          isYou: true,
          socials: { linkedin: "#", twitter: "#", github: "#" },
        },
        {
          name: "APETOBGO Joèl",
          role: "CEO",
          avatar: "👤",
          image: "",
          isYou: false,
          socials: { linkedin: "#", twitter: "#" },
        },
      ],
      projects: [
        {
          name: "Foncira",
          icon: "⚡",
          status: language === "fr" ? "En conception" : "In design",
          statusColor: "blue",
          description:
            language === "fr"
              ? "Description du projet principal"
              : "Main project description",
        },
      ],
      technologies: ["Next.js", "Node.js", "MongoDB", "Vercel"],
    },
    {
      id: 3,
      name: "Startup 3",
      logo: "🌍",
      role: language === "fr" ? "Directeur Technique" : "Technical Director",
      fullRole:
        language === "fr" ? "Directeur Technique" : "Technical Director",
      period: language === "fr" ? "2024 - Présent" : "2024 - Present",
      location: "Remote",
      slogan: language === "fr" ? "Connecter le monde" : "Connecting the world",
      description:
        language === "fr"
          ? "Description de votre troisième startup ou entreprise. Personnalisez selon vos besoins."
          : "Description of your third startup or company. Customize as needed.",
      mission:
        language === "fr"
          ? "La mission de cette entreprise."
          : "The mission of this company.",
      color: "green",
      website: "#",
      teamMembers: [
        {
          name: "ADOBOE Comlan Julien",
          role: language === "fr" ? "Dir. Technique" : "Tech Director",
          avatar: "👨‍💻",
          image:
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
          isYou: true,
          socials: { linkedin: "#", github: "#", twitter: "#" },
        },
        {
          name: "Équipe",
          role: "Team",
          avatar: "👥",
          image:
            "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=400&fit=crop&crop=face",
          isYou: false,
          socials: { linkedin: "#" },
        },
      ],
      projects: [
        {
          name: "Application",
          icon: "📱",
          status: language === "fr" ? "En développement" : "In development",
          statusColor: "yellow",
          description:
            language === "fr"
              ? "Application en cours de développement"
              : "Application in development",
        },
      ],
      technologies: ["React Native", "Firebase", "TypeScript"],
    },
  ];

  // Section Stage
  const internship = {
    title: language === "fr" ? "Recherche de Stage" : "Internship Search",
    subtitle:
      language === "fr"
        ? "Développement Web & Management Digital"
        : "Web Development & Digital Management",
    description:
      language === "fr"
        ? "Parallèlement à mes rôles de direction technique dans plusieurs startups, je suis actuellement étudiant en Transformation Digitale et je recherche un stage de fin d'études pour enrichir mon expérience professionnelle dans un nouvel environnement."
        : "Alongside my technical leadership roles in multiple startups, I am currently a Digital Transformation student looking for an end-of-studies internship to enrich my professional experience in a new environment.",
    details: [
      {
        icon: Calendar,
        label: language === "fr" ? "Durée" : "Duration",
        value: language === "fr" ? "4 à 6 mois" : "4 to 6 months",
      },
      {
        icon: Clock,
        label: language === "fr" ? "Disponibilité" : "Availability",
        value: language === "fr" ? "Février 2025" : "February 2025",
      },
      {
        icon: MapPin,
        label: language === "fr" ? "Localisation" : "Location",
        value:
          language === "fr"
            ? "France / Afrique / Remote"
            : "France / Africa / Remote",
      },
      {
        icon: Briefcase,
        label: language === "fr" ? "Domaines" : "Fields",
        value:
          language === "fr"
            ? "Dev Web, Gestion de Projet"
            : "Web Dev, Project Management",
      },
    ],
    skills: [
      "React / Next.js",
      "Node.js / NestJS",
      "TypeScript",
      "PostgreSQL / MongoDB",
      "Docker",
      "Gestion Agile",
      "Leadership",
      "Communication",
    ],
  };

  const tabs = [
    {
      id: "companies",
      label: language === "fr" ? "Mes Entreprises" : "My Companies",
      icon: Building2,
    },
    {
      id: "internship",
      label: language === "fr" ? "Stage" : "Internship",
      icon: GraduationCap,
    },
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: {
        bg: "from-blue-500 to-blue-600",
        bgLight:
          "from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20",
        border: "border-blue-500",
        text: "text-blue-500",
        badge:
          "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
      },
      purple: {
        bg: "from-purple-500 to-purple-600",
        bgLight:
          "from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20",
        border: "border-purple-500",
        text: "text-purple-500",
        badge:
          "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400",
      },
      green: {
        bg: "from-green-500 to-green-600",
        bgLight:
          "from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20",
        border: "border-green-500",
        text: "text-green-500",
        badge:
          "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
      },
      orange: {
        bg: "from-orange-500 to-orange-600",
        bgLight:
          "from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20",
        border: "border-orange-500",
        text: "text-orange-500",
        badge:
          "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400",
      },
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="bg-white dark:bg-[#0d1117] text-gray-900 dark:text-gray-100 transition-colors duration-300 min-h-screen">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-[#0d1117]/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link
              to="/"
              className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="hidden sm:inline">
                {language === "fr"
                  ? "Retour au Portfolio"
                  : "Back to Portfolio"}
              </span>
            </Link>

            <div className="flex items-center gap-3">
              <Crown className="w-6 h-6 text-yellow-500" />
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  {language === "fr"
                    ? "Leadership & Entrepreneuriat"
                    : "Leadership & Entrepreneurship"}
                </h1>
              </div>
            </div>

            <div className="w-24"></div>
          </div>
        </div>
      </header>

      {/* Hero Banner */}
      <section className="pt-24 pb-8 relative overflow-hidden min-h-[400px]">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
          }}
        ></div>
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-blue-900/85 to-purple-900/90"></div>
        {/* Pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>

        <motion.div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center text-white">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-yellow-500/20 text-yellow-300 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-yellow-500/30"
            >
              <Crown className="w-4 h-4" />
              {language === "fr" ? "CTO & Entrepreneur" : "CTO & Entrepreneur"}
            </motion.div>

            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {language === "fr"
                ? "Mes Rôles de Direction"
                : "My Leadership Roles"}
            </h1>
            <p className="text-lg md:text-xl opacity-80 max-w-2xl mx-auto mb-8">
              {language === "fr"
                ? "Directeur technique et co-fondateur de plusieurs startups innovantes, je combine vision stratégique et expertise technique."
                : "Technical director and co-founder of several innovative startups, I combine strategic vision and technical expertise."}
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-8 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">
                  {companies.length}
                </div>
                <div className="text-sm text-gray-300">
                  {language === "fr" ? "Entreprises" : "Companies"}
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">
                  {companies.reduce((acc, c) => acc + c.projects.length, 0)}
                </div>
                <div className="text-sm text-gray-300">
                  {language === "fr" ? "Projets" : "Projects"}
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">
                  {companies.reduce((acc, c) => acc + c.teamMembers.length, 0)}
                </div>
                <div className="text-sm text-gray-300">
                  {language === "fr" ? "Collaborateurs" : "Collaborators"}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Navigation Tabs */}
      <nav className="sticky top-[73px] z-40 bg-white dark:bg-[#161b22] border-b border-gray-200 dark:border-gray-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto scrollbar-hide">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  setSelectedCompany(null);
                }}
                className={`flex items-center gap-2 px-6 py-4 text-sm font-medium border-b-2 transition-all whitespace-nowrap ${
                  activeTab === tab.id
                    ? "border-blue-500 text-blue-600 dark:text-blue-400"
                    : "border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                }`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <AnimatePresence mode="wait">
          {/* Companies Tab */}
          {activeTab === "companies" && !selectedCompany && (
            <motion.div
              key="companies-list"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <Building2 className="w-6 h-6 text-blue-500" />
                {language === "fr"
                  ? "Mes Entreprises & Startups"
                  : "My Companies & Startups"}
              </h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {companies.map((company, index) => {
                  const colors = getColorClasses(company.color);
                  return (
                    <motion.div
                      key={company.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => setSelectedCompany(company)}
                      className="bg-white dark:bg-[#161b22] rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-xl transition-all cursor-pointer group hover:border-blue-500"
                    >
                      {/* Header with gradient */}
                      <div
                        className={`bg-gradient-to-r ${colors.bg} p-6 text-white relative overflow-hidden`}
                      >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                        <div className="relative z-10">
                          <div className="text-4xl mb-3">{company.logo}</div>
                          <h3 className="text-xl font-bold">{company.name}</h3>
                          <p className="text-sm opacity-80">{company.slogan}</p>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        {/* Role Badge */}
                        <div className="flex items-center gap-2 mb-4">
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-medium ${colors.badge}`}
                          >
                            <Crown className="w-3 h-3 inline mr-1" />
                            {company.role}
                          </span>
                        </div>

                        {/* Info */}
                        <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400 mb-4">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            {company.period}
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            {company.location}
                          </div>
                        </div>

                        {/* Team Preview */}
                        <div className="flex items-center gap-2 mb-4">
                          <div className="flex -space-x-2">
                            {company.teamMembers
                              .slice(0, 4)
                              .map((member, i) => (
                                <div
                                  key={i}
                                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm border-2 border-white dark:border-gray-800 ${
                                    member.isYou
                                      ? "bg-blue-500"
                                      : "bg-gray-200 dark:bg-gray-700"
                                  }`}
                                >
                                  {member.avatar}
                                </div>
                              ))}
                          </div>
                          <span className="text-xs text-gray-500">
                            {company.teamMembers.length}{" "}
                            {language === "fr" ? "membres" : "members"}
                          </span>
                        </div>

                        {/* Projects count */}
                        <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-800">
                          <span className="text-sm text-gray-500">
                            {company.projects.length}{" "}
                            {language === "fr" ? "projets" : "projects"}
                          </span>
                          <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-blue-500 group-hover:translate-x-1 transition-all" />
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          )}

          {/* Selected Company Detail */}
          {activeTab === "companies" && selectedCompany && (
            <motion.div
              key="company-detail"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {/* Back button */}
              <button
                onClick={() => setSelectedCompany(null)}
                className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-500 mb-6 transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                {language === "fr"
                  ? "Retour aux entreprises"
                  : "Back to companies"}
              </button>

              {(() => {
                const colors = getColorClasses(selectedCompany.color);
                return (
                  <>
                    {/* Company Header */}
                    <div
                      className={`bg-gradient-to-r ${colors.bgLight} rounded-2xl p-8 border ${colors.border}/30 mb-8`}
                    >
                      <div className="flex flex-col md:flex-row md:items-center gap-6">
                        <div
                          className={`w-20 h-20 bg-gradient-to-br ${colors.bg} rounded-2xl flex items-center justify-center text-4xl shadow-lg`}
                        >
                          {selectedCompany.logo}
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-wrap items-center gap-3 mb-2">
                            <h1 className="text-3xl font-bold">
                              {selectedCompany.name}
                            </h1>
                            <span
                              className={`px-3 py-1 rounded-full text-sm font-medium ${colors.badge}`}
                            >
                              <Crown className="w-3 h-3 inline mr-1" />
                              {selectedCompany.role}
                            </span>
                          </div>
                          <p className="text-gray-600 dark:text-gray-400 mb-3">
                            {selectedCompany.slogan}
                          </p>
                          <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                            <span className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {selectedCompany.period}
                            </span>
                            <span className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              {selectedCompany.location}
                            </span>
                            {selectedCompany.website !== "#" && (
                              <a
                                href={selectedCompany.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1 hover:text-blue-500"
                              >
                                <Globe className="w-4 h-4" />
                                Website
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Description & Mission */}
                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      <div className="bg-white dark:bg-[#161b22] p-6 rounded-xl border border-gray-200 dark:border-gray-700">
                        <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                          <Building2 className={`w-5 h-5 ${colors.text}`} />
                          {language === "fr" ? "À Propos" : "About"}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400">
                          {selectedCompany.description}
                        </p>
                      </div>
                      <div className="bg-white dark:bg-[#161b22] p-6 rounded-xl border border-gray-200 dark:border-gray-700">
                        <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                          <Target className={`w-5 h-5 ${colors.text}`} />
                          {language === "fr" ? "Mission" : "Mission"}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400">
                          {selectedCompany.mission}
                        </p>
                      </div>
                    </div>

                    {/* Team */}
                    <div className="mb-8">
                      <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                        <Users className={`w-5 h-5 ${colors.text}`} />
                        {language === "fr" ? "L'Équipe" : "The Team"}
                      </h3>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {selectedCompany.teamMembers.map((member, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative"
                          >
                            {/* Badge "C'est moi" */}
                            {member.isYou && (
                              <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 z-20 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                                {language === "fr"
                                  ? "C'est moi !"
                                  : "That's me!"}
                              </div>
                            )}

                            {/* Card with background image */}
                            <div
                              className={`relative h-72 rounded-2xl overflow-hidden shadow-lg transition-all duration-300 group-hover:shadow-2xl group-hover:scale-105 ${
                                member.isYou ? "ring-4 ring-blue-500" : ""
                              }`}
                            >
                              {/* Background Image */}
                              <div
                                className="absolute inset-0 bg-cover bg-center"
                                style={{
                                  backgroundImage: member.image
                                    ? `url(${member.image})`
                                    : `linear-gradient(135deg, ${
                                        colors.bg.includes("blue")
                                          ? "#3b82f6"
                                          : colors.bg.includes("purple")
                                            ? "#8b5cf6"
                                            : "#10b981"
                                      } 0%, ${
                                        colors.bg.includes("blue")
                                          ? "#1d4ed8"
                                          : colors.bg.includes("purple")
                                            ? "#6d28d9"
                                            : "#059669"
                                      } 100%)`,
                                }}
                              />

                              {/* Gradient Overlay */}
                              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                              {/* Social Icons - Top Right */}
                              <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                {member.socials?.facebook && (
                                  <a
                                    href={member.socials.facebook}
                                    className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-blue-600 transition-colors"
                                  >
                                    <Facebook className="w-4 h-4" />
                                  </a>
                                )}
                                {member.socials?.twitter && (
                                  <a
                                    href={member.socials.twitter}
                                    className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-sky-500 transition-colors"
                                  >
                                    <Twitter className="w-4 h-4" />
                                  </a>
                                )}
                                {member.socials?.instagram && (
                                  <a
                                    href={member.socials.instagram}
                                    className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-pink-500 transition-colors"
                                  >
                                    <Instagram className="w-4 h-4" />
                                  </a>
                                )}
                                {member.socials?.linkedin && (
                                  <a
                                    href={member.socials.linkedin}
                                    className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors"
                                  >
                                    <Linkedin className="w-4 h-4" />
                                  </a>
                                )}
                                {member.socials?.phone && (
                                  <a
                                    href={`tel:${member.socials.phone}`}
                                    className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-green-500 transition-colors"
                                  >
                                    <Phone className="w-4 h-4" />
                                  </a>
                                )}
                                {member.socials?.github && (
                                  <a
                                    href={member.socials.github}
                                    className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-gray-800 transition-colors"
                                  >
                                    <Github className="w-4 h-4" />
                                  </a>
                                )}
                              </div>

                              {/* Content at bottom */}
                              <div className="absolute bottom-0 left-0 right-0 p-4">
                                <h4 className="text-white font-bold text-lg leading-tight mb-1">
                                  {member.name}
                                </h4>
                                <p
                                  className={`text-sm font-medium ${
                                    colors.bg.includes("blue")
                                      ? "text-blue-300"
                                      : colors.bg.includes("purple")
                                        ? "text-purple-300"
                                        : "text-emerald-300"
                                  }`}
                                >
                                  {member.role}
                                </p>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Projects */}
                    <div className="mb-8">
                      <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                        <Rocket className={`w-5 h-5 ${colors.text}`} />
                        {language === "fr" ? "Projets" : "Projects"}
                      </h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        {selectedCompany.projects.map((project, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white dark:bg-[#161b22] p-5 rounded-xl border border-gray-200 dark:border-gray-700 flex items-start gap-4"
                          >
                            <div
                              className={`w-12 h-12 bg-gradient-to-br ${colors.bg} rounded-xl flex items-center justify-center text-2xl flex-shrink-0`}
                            >
                              {project.icon}
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-1">
                                <h4 className="font-bold">{project.name}</h4>
                                <span
                                  className={`px-2 py-0.5 rounded-full text-xs ${
                                    project.statusColor === "green"
                                      ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                                      : project.statusColor === "yellow"
                                        ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400"
                                        : "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
                                  }`}
                                >
                                  {project.status}
                                </span>
                              </div>
                              <p className="text-sm text-gray-600 dark:text-gray-400">
                                {project.description}
                              </p>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                        <Zap className={`w-5 h-5 ${colors.text}`} />
                        {language === "fr" ? "Technologies" : "Technologies"}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedCompany.technologies.map((tech, index) => (
                          <motion.span
                            key={tech}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.05 }}
                            className={`px-4 py-2 rounded-xl font-medium ${colors.badge}`}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </>
                );
              })()}
            </motion.div>
          )}

          {/* Internship Tab */}
          {activeTab === "internship" && (
            <motion.div
              key="internship"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                  <div className="inline-flex items-center gap-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-4 py-2 rounded-full text-sm font-medium mb-4">
                    <BookOpen className="w-4 h-4" />
                    {language === "fr"
                      ? "Recherche Active"
                      : "Actively Seeking"}
                  </div>
                  <h2 className="text-3xl font-bold mb-2">
                    {internship.title}
                  </h2>
                  <p className="text-xl text-gray-500 dark:text-gray-400">
                    {internship.subtitle}
                  </p>
                </div>

                {/* Description */}
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-8 rounded-2xl border border-green-200 dark:border-green-800 mb-8">
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    {internship.description}
                  </p>
                </div>

                {/* Details Grid */}
                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  {internship.details.map((detail, index) => (
                    <motion.div
                      key={detail.label}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-white dark:bg-[#161b22] p-5 rounded-xl border border-gray-200 dark:border-gray-700 flex items-center gap-4"
                    >
                      <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center">
                        <detail.icon className="w-6 h-6 text-green-600 dark:text-green-400" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {detail.label}
                        </p>
                        <p className="font-semibold">{detail.value}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Skills */}
                <div className="mb-8">
                  <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                    <Award className="w-5 h-5 text-green-500" />
                    {language === "fr"
                      ? "Compétences à offrir"
                      : "Skills to Offer"}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {internship.skills.map((skill, index) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.05 }}
                        className="px-4 py-2 bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 text-green-700 dark:text-green-400 rounded-xl font-medium"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="text-center">
                  <Link
                    to="/#contact"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-8 py-4 rounded-xl font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-green-500/25"
                  >
                    <Mail className="w-5 h-5" />
                    {language === "fr"
                      ? "Me contacter pour un stage"
                      : "Contact me for an internship"}
                    <ExternalLink className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <FloatingTranslateButton />
    </div>
  );
};

export default CareerPage;
