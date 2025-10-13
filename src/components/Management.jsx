import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Target, Users2, ClipboardCheck, MessageSquare, TrendingUp, Zap } from 'lucide-react'

const Management = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const managementSkills = [
    {
      icon: Users2,
      title: 'Gestion d\'Équipe',
      description: 'Coordination d\'équipes pluridisciplinaires (développeurs, designers, ingénieurs logiciels)',
      color: 'wax-blue',
      achievements: [
        'Management de 5+ personnes',
        'Répartition efficace des tâches',
        'Motivation et accompagnement'
      ]
    },
    {
      icon: ClipboardCheck,
      title: 'Planification Agile',
      description: 'Mise en place de méthodologies agiles pour un développement itératif et efficace',
      color: 'wax-green',
      achievements: [
        'Sprints de 2 semaines',
        'Daily stand-ups',
        'Retrospectives d\'équipe'
      ]
    },
    {
      icon: Target,
      title: 'Suivi de Projet',
      description: 'Monitoring des objectifs, deadlines et livrables tout au long du cycle de vie du projet',
      color: 'wax-orange',
      achievements: [
        'Utilisation d\'outils de gestion',
        'Reporting régulier',
        'Gestion des risques'
      ]
    },
    {
      icon: MessageSquare,
      title: 'Communication',
      description: 'Communication efficace avec les parties prenantes et maintien d\'une bonne dynamique d\'équipe',
      color: 'wax-red',
      achievements: [
        'Réunions de synchronisation',
        'Documentation claire',
        'Feedback constructif'
      ]
    },
    {
      icon: TrendingUp,
      title: 'Vision Stratégique',
      description: 'Capacité à aligner les objectifs techniques avec les enjeux business et stratégiques',
      color: 'wax-purple',
      achievements: [
        'Analyse des besoins',
        'Priorisation des features',
        'ROI et impact'
      ]
    },
    {
      icon: Zap,
      title: 'Résolution de Problèmes',
      description: 'Identification rapide des blocages et mise en place de solutions adaptées',
      color: 'wax-yellow',
      achievements: [
        'Gestion des conflits',
        'Prise de décision',
        'Innovation continue'
      ]
    }
  ]

  const experience = {
    company: 'SylvaTeam',
    project: 'TogoSchool',
    role: 'Chef de Projet',
    period: '2023 - 2024',
    description: 'Direction du projet TogoSchool, une plateforme éducative innovante. Coordination d\'une équipe de 5 personnes incluant développeurs, designers et ingénieurs logiciels.',
    highlights: [
      'Gestion complète du cycle de vie du projet',
      'Coordination de 5 membres d\'équipe',
      'Livraison dans les délais avec qualité',
      'Communication avec les stakeholders',
      'Mise en place de processus agiles'
    ]
  }

  return (
    <section id="management" className="section-padding bg-gray-50 dark:bg-gray-800" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Côté{' '}
            <span className="bg-gradient-to-r from-wax-yellow via-wax-orange to-wax-red bg-clip-text text-transparent">
              Management
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-wax-yellow to-wax-orange mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Des compétences managériales pour piloter vos projets digitaux avec efficacité
          </p>
        </motion.div>

        {/* Main Experience Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gradient-to-br from-wax-yellow/10 via-wax-orange/10 to-wax-red/10 dark:from-wax-yellow/5 dark:via-wax-orange/5 dark:to-wax-red/5 rounded-2xl p-8 md:p-12 mb-16 border-l-4 border-wax-orange"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-wax-orange/20 text-wax-orange dark:text-wax-yellow rounded-full text-sm font-semibold mb-4">
                {experience.period}
              </div>
              <h3 className="text-3xl font-bold mb-2 text-gray-800 dark:text-white">
                {experience.role}
              </h3>
              <p className="text-xl text-wax-orange dark:text-wax-yellow font-semibold mb-4">
                {experience.company} - {experience.project}
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                {experience.description}
              </p>
            </div>
            <div className="space-y-3">
              {experience.highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="flex items-start gap-3 bg-white dark:bg-gray-700 p-4 rounded-lg"
                >
                  <div className="w-2 h-2 bg-wax-orange rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700 dark:text-gray-300">{highlight}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Management Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {managementSkills.map((skill, index) => {
            const Icon = skill.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="group bg-white dark:bg-gray-900 rounded-xl p-6 hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <div className={`w-14 h-14 bg-${skill.color}/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className={`w-7 h-7 text-${skill.color}`} />
                </div>
                
                <h4 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">
                  {skill.title}
                </h4>
                
                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  {skill.description}
                </p>

                <div className="space-y-2">
                  {skill.achievements.map((achievement, achIndex) => (
                    <div key={achIndex} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <div className={`w-1.5 h-1.5 bg-${skill.color} rounded-full`}></div>
                      <span>{achievement}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Management Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-16 text-center max-w-3xl mx-auto"
        >
          <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
            Ma philosophie de management
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed italic">
            "Un bon manager ne se contente pas de diriger, il inspire, facilite et accompagne son équipe 
            vers la réussite collective. La technologie est un moyen, mais ce sont les personnes qui font 
            la différence."
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Management
