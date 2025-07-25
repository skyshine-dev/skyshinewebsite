-- MySQL dump 10.13  Distrib 8.0.42, for Win64 (x86_64)
--
-- Host: localhost    Database: skyshine_db
-- ------------------------------------------------------
-- Server version	8.0.42

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `_prisma_migrations`
--

DROP TABLE IF EXISTS `_prisma_migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `_prisma_migrations` (
  `id` varchar(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `checksum` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `finished_at` datetime(3) DEFAULT NULL,
  `migration_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `logs` text COLLATE utf8mb4_unicode_ci,
  `rolled_back_at` datetime(3) DEFAULT NULL,
  `started_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `applied_steps_count` int unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `_prisma_migrations`
--

LOCK TABLES `_prisma_migrations` WRITE;
/*!40000 ALTER TABLE `_prisma_migrations` DISABLE KEYS */;
INSERT INTO `_prisma_migrations` VALUES ('48f72422-d040-4ab1-bfeb-294ff0b7e829','f6c842debe9d763ee002101d6702f3afc50e2a69cd57d1ad64d000fc44a089e0','2025-05-27 12:08:51.272','20250527120851_init',NULL,NULL,'2025-05-27 12:08:51.153',1);
/*!40000 ALTER TABLE `_prisma_migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `blogpost`
--

DROP TABLE IF EXISTS `blogpost`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `blogpost` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `title` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `category` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `excerpt` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `content` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `author` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `date` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `slug` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `imagePath` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `isFeatured` tinyint(1) NOT NULL DEFAULT '0',
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `BlogPost_slug_key` (`slug`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `blogpost`
--

LOCK TABLES `blogpost` WRITE;
/*!40000 ALTER TABLE `blogpost` DISABLE KEYS */;
INSERT INTO `blogpost` VALUES ('1ceb51d2-c77b-4ab0-b7ad-3bb8631f1dc1','Top 5 Mistakes to Avoid in App Development','Custom Development','Avoid these common pitfalls in app developmentΓÇöfrom poor UX design to lack of scalabilityΓÇöto ensure your projectΓÇÖs success from the ground up.','<p>Developing a successful web or mobile application involves more than writing codeΓÇöit requires strategy, user empathy, and technical foresight. Here are the most common pitfalls development teams faceΓÇöand how to avoid them.</p><h3>1. <strong>Skipping Market Validation</strong></h3><p>Building an app without validating user demand is risky. Conduct <strong>market research, surveys, and MVP testing</strong> before full-scale development.</p><h3>2. <strong>Poor UX/UI Design</strong></h3><p>Great functionality means nothing if users can\'t navigate it. Invest in <strong>intuitive interfaces</strong>, accessibility, and responsive design from day one.</p><h3>3. <strong>Overengineering the First Release</strong></h3><p>Avoid feature bloat in v1. Focus on a <strong>core problem</strong> with a lean, fast MVP, then iterate based on user feedback.</p><h3>4. <strong>Ignoring Scalability</strong></h3><p>An app built for today must handle tomorrowΓÇÖs load. Ensure your tech stack supports <strong>horizontal scaling, caching, and microservices</strong> if needed.</p><h3>5. <strong>Lack of Post-Launch Support</strong></h3><p>Launching the app is only the beginning. Plan for <strong>bug fixes, user onboarding, version control, and continuous improvement</strong> from the outset.</p><blockquote><p>A thoughtful, agile, and user-centered approach is the difference between app abandonment and adoption.</p></blockquote>','Skyshine Technical Expert ','2025-05-28 06:58:50.335','pp-development-mistakes','/upload/1748443232270-26.jpg',0,'2025-05-28 06:58:50.335','2025-05-28 07:54:13.092'),('2b7bdef0-ec04-48c2-8ab1-8906d0596f73','The Power of Local SEO for Digital Brands','Digital Marketing ','Local SEO is essential for visibility and lead generation. Explore how to optimize your business for local searches and connect with nearby customers.','<p>For digital-first companies, <strong>local SEO is no longer optional</strong>ΓÇöitΓÇÖs a vital part of visibility and conversion in geo-targeted markets. Whether you\'re a multi-location brand or a growing startup, optimizing for local search can bring qualified traffic to your doorstep.</p><h3>Why Local SEO Matters:</h3><h4>1. <strong>\"Near Me\" Searches Are Booming</strong></h4><p>Users are increasingly searching for services <strong>in their vicinity</strong>ΓÇöand Google is prioritizing results based on proximity and relevance.</p><h4>2. <strong>Google Business Profile Optimization</strong></h4><p>An optimized GBP listing with accurate hours, reviews, photos, and categories can <strong>skyrocket visibility in local packs</strong> and maps.</p><h4>3. <strong>Localized Content Marketing</strong></h4><p>Create <strong>region-specific blog posts, landing pages, and FAQs</strong> targeting keywords relevant to your local audience.</p><h4>4. <strong>Online Reviews &amp; Reputation Management</strong></h4><p>Authentic reviews drive trust. A steady stream of positive feedback boosts your <strong>click-through rates and ranking position</strong>.</p><h4>5. <strong>Mobile-First Local Discovery</strong></h4><p>More than 70% of local searches happen on smartphones. Your local SEO strategy should prioritize <strong>mobile responsiveness and fast load times</strong>.</p><blockquote><p>Think global, but rank localΓÇöyour best customers might be right next door.</p></blockquote>','Skyshine Technical Expert ','2025-05-28 07:01:36.625','local-seo-for-digital-brands','',1,'2025-05-28 07:01:36.625','2025-05-29 04:42:37.417'),('41025d5a-dd5a-43f0-96f0-c0acfd354215','The Future of SaaS in AI-Driven Markets','SaaS Solutions','Learn how AI is shaping the next generation of SaaS products, enabling hyper-personalization, smart automation, and data-driven decision-making.','<p>The Software-as-a-Service (SaaS) landscape is undergoing a rapid transformation, driven by <strong>AI, machine learning, and data-centric development</strong>. The next evolution of SaaS is intelligent, adaptive, and deeply personalized.</p><h3>WhatΓÇÖs Changing?</h3><h4>1. <strong>AI-Embedded Features</strong></h4><p>From chatbots to predictive analytics, AI is becoming a <strong>standard feature in modern SaaS apps</strong>, improving user experience, automation, and decision-making.</p><h4>2. <strong>Hyper-Personalization</strong></h4><p>Using AI, SaaS platforms now <strong>learn user behavior</strong> and dynamically tailor dashboards, content, or suggestionsΓÇöenhancing retention and usability.</p><h4>3. <strong>Autonomous Operations</strong></h4><p>Modern SaaS tools can <strong>automate workflows end-to-end</strong>, reducing the need for manual configuration and human oversight.</p><h4>4. <strong>Advanced Analytics &amp; Forecasting</strong></h4><p>With AI-powered insights, businesses can go beyond ΓÇ£what happenedΓÇ¥ to understand ΓÇ£whyΓÇ¥ and predict ΓÇ£whatΓÇÖs next.ΓÇ¥</p><h4>5. <strong>AI-as-a-Service Models</strong></h4><p>WeΓÇÖre entering an era where <strong>SaaS is the carrier of AI</strong>ΓÇöoffering packaged intelligence through APIs and microservices for niche tasks like image recognition, fraud detection, or sentiment analysis.</p><blockquote><p>The future of SaaS isnΓÇÖt just in the cloudΓÇöitΓÇÖs in the cloud that thinks.</p></blockquote>','Skyshine Technical Expert ','2025-05-28 06:56:33.522','future-of-saas-ai-markets','/upload/1748443232270-26.jpg',1,'2025-05-28 06:56:33.522','2025-05-28 08:39:14.926'),('8bbcbe23-6a01-4446-8745-8335937e94de','Why Custom Software Is Better Than Off-the-Shelf Solutions','Custom Development','Discover the key benefits of custom software development over generic solutionsΓÇötailored features, scalability, and long-term value for your business.','<p>In today\'s fast-paced business landscape, software can be the difference between thriving and just surviving. While off-the-shelf solutions may seem cost-effective and quick to deploy, <strong>custom software offers unmatched flexibility and long-term value</strong>.</p><h3>Key Advantages of Custom Software:</h3><h4>1. <strong>Tailored to Your Business</strong></h4><p>Off-the-shelf tools are built to serve a broad market. Custom software is built <strong>exactly for your processes</strong>, integrating with your existing ecosystem and supporting your unique workflows.</p><h4>2. <strong>Scalable Architecture</strong></h4><p>As your business grows, so do your software needs. Custom-built applications can be <strong>scaled horizontally and vertically</strong>, with modular upgrades and resource efficiency.</p><h4>3. <strong>Enhanced Security</strong></h4><p>Generic solutions are common targets for cyber threats. A custom application can implement <strong>advanced, role-based security protocols</strong>, tailored to industry regulations like GDPR, HIPAA, or ISO.</p><h4>4. <strong>Cost-Efficient Over Time</strong></h4><p>Although upfront costs may be higher, custom solutions eliminate <strong>recurring licensing fees, bloated feature sets</strong>, and third-party dependenciesΓÇösaving money in the long run.</p><h4>5. <strong>Competitive Advantage</strong></h4><p>Custom software is a strategic asset. You own it, you shape it, and it becomes <strong>a core differentiator</strong> in your market segment.</p><blockquote><p>In essence, when your business needs are unique, your software should be too.</p></blockquote>','Skyshine Technical Expert ','2025-05-28 06:53:10.082','custom-vs-off-the-shelf-software','/upload/1748443232270-26.jpg',1,'2025-05-28 06:53:10.082','2025-05-28 07:53:55.639'),('a50d65b3-2711-48a5-a8f9-4803aa265c56','Testing two','Testing Two','testing blog page image upload','<p>testing blog page image upload<strong> in the CP to make sure images are being uploaded</strong></p>','Tarun','2025-05-28 08:36:20.784','testing-two','/upload/1748443232270-26.jpg',1,'2025-05-28 08:36:20.784','2025-05-28 14:40:32.497'),('d108badc-da83-4441-b3de-558cd19be1be','testing','Testing','TestingTesting','<ul><li><p>Te<strong>stingTestingTestingTesting</strong><br>nskwn</p></li><li><p>snwk</p></li><li><p>nkswn</p></li><li><p></p></li></ul>','Testing','2025-05-27 12:10:16.140','Testing','/upload/1748443232270-26.jpg',1,'2025-05-27 12:10:16.140','2025-05-27 19:14:31.206');
/*!40000 ALTER TABLE `blogpost` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `job`
--

DROP TABLE IF EXISTS `job`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `job` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `title` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `company` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `location` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `type` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `requirements` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `salary` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `contactEmail` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `isActive` tinyint(1) NOT NULL DEFAULT '1',
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `job`
--

LOCK TABLES `job` WRITE;
/*!40000 ALTER TABLE `job` DISABLE KEYS */;
/*!40000 ALTER TABLE `job` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `title` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `icon` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `heroImageUrl` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `keyFeatures` json NOT NULL,
  `platformExamples` json NOT NULL,
  `testimonials` json NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL,
  `ctaDescription` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `ctaHeading` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `highlights` json NOT NULL,
  `homepageImageUrl` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `isFeaturedOnHomePage` tinyint(1) NOT NULL DEFAULT '0',
  `previewDescription` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `tagline` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `ctaImageUrl` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `href` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES ('BizMateAI','BizMate AI','Your WhatsApp-style AI business companion for smarter operations, automated tasks, and real-time insightsΓÇöboosting your productivity and growth.','≡ƒÆ╝','/upload/1749287738804-bizmate hero-1 (2).png','[{\"desc\": \"Communicate with your AI assistant through a familiar chat interface, reducing the learning curve and boosting adoption.\", \"title\": \"WhatsApp-Style Chat Interface\", \"number\": 1}, {\"desc\": \"Automatically schedule tasks, set reminders, and receive proactive nudges so nothing falls through the cracks.\", \"title\": \"Task Automation & Smart Reminders\", \"number\": 2}, {\"desc\": \"Ask for instant business metricsΓÇösales numbers, inventory status, or lead conversion ratesΓÇöright in the chat.\", \"title\": \"Real-Time Data Insights\", \"number\": 3}, {\"desc\": \"Seamlessly pull in data from Google Calendar, Drive, and your CRM so you can manage workflows without switching apps.\", \"title\": \"Google Workspace & CRM Integration\", \"number\": 4}, {\"desc\": \"Interact by typing or speakingΓÇöBizMate AI understands natural language and responds just like a human assistant.\", \"title\": \"Voice & Text Command Compatibility\", \"number\": 5}, {\"desc\": \"Receive proactive recommendations (e.g., follow up with a VIP client) and alerts (e.g., low stock notifications) before issues arise.\", \"title\": \"Smart Suggestions & Proactive Alerts\", \"number\": 6}]','[{\"url\": \"/upload/1749289395942-bizmate_block-1.png\", \"label\": \"block-1\"}, {\"url\": \"/upload/1749289395976-bizmate_block-2.png\", \"label\": \"block-2\"}, {\"url\": \"/upload/1749289395959-bizmate_block-3.png\", \"label\": \"block-3\"}, {\"url\": \"/upload/1749289396040-bizmate_block-4.png\", \"label\": \"block-4\"}, {\"url\": \"/upload/1749289395975-bizmate_block-5.png\", \"label\": \"block-5\"}]','[{\"role\": \"Operations Manager, NovaTech Solutions\", \"quote\": \"BizMate AI has become our go-to assistant for managing day-to-day tasks.        I love that I can ask it to schedule calls, pull up sales reports, or remind me about deadlinesΓÇöall within a chat window.        ItΓÇÖs like having a personal assistant on WhatsApp.\", \"author\": \"Aisha Patel\"}, {\"role\": \"Co-Founder, BrightCore Ventures\", \"quote\": \"Implementing BizMate AI was a game-changer for our small team.        The CRM integration saves us hours each weekΓÇöno more toggling between apps for lead data.        Plus, those proactive alerts keep us a step ahead of client needs.\", \"author\": \"Carlos Mendes\"}]','2025-06-06 20:34:02.279','2025-06-07 09:43:16.937','Let BizMate AI guide your business to its next breakthrough with personalized AI solutions tailored to your unique challenges.','Excited to create synergy in your organization?','[\"Task automation and smart reminders\", \"Real-time data insights via chat\", \"Integration with Google Workspace, CRM, and more\", \"Integration with Google Workspace, CRM, and more\", \"Smart suggestions and proactive alerts\"]','/upload/1749287739934-bizmate hero-1 (2).png',1,'Your WhatsApp-style AI business companion for smarter operations, automated tasks, and real-time insightsΓÇöboosting your productivity and growth.','BizMateAI bring synergy in your organization','/upload/1749242040183-last section common immage.png',''),('Horizon HR','Horizon HR','From recruitment to payroll, Horizon HR automates every HR process and gives you the insights to lead smarter, faster, and better.','≡ƒæÑ','/upload/1749806576244-horizxon hr hero image (1).png','[{\"desc\": \"Intelligent resume screening and candidate matching, Hire faster with better-fit candidates, saving hours on manual filtering.\", \"title\": \"Γ£à AI-Powered Recruitment\", \"number\": 1}, {\"desc\": \"Smart payroll calculations with built-in tax and labor law compliance , Eliminate errors and stay compliant effortlessly ΓÇö no more month-end stress.\", \"title\": \"≡ƒº╛ Automated Payroll & Compliance\", \"number\": 2}, {\"desc\": \"Smart timesheets, biometric/API integration, and automated leave workflows , Gain accurate visibility into employee hours and leave balances, all in real time.\", \"title\": \"≡ƒòÆ  Real-Time Attendance & Leave Tracking\", \"number\": 3}, {\"desc\": \"Centralized hub for personal data, leave requests, payslips, and more , Empower employees and reduce HR dependency with self-managed tools.\", \"title\": \"≡ƒæÑ Employee Self-Service Portal\", \"number\": 4}, {\"desc\": \"Visual dashboards, trend analysis, and customizable reports Make smarter decisions with data-driven insights on performance, retention, and hiring.\", \"title\": \"≡ƒôè  Advanced Analytics & Reporting\", \"number\": 5}, {\"desc\": \"Automated checklists, document collection, and IT coordination , Deliver a smooth, professional experience for every employee lifecycle stage.\", \"title\": \"≡ƒöä Seamless Onboarding & Offboarding\", \"number\": 6}]','[{\"url\": \"/upload/1749801446547-horizon hr block-1.png\", \"label\": \"block-1\"}, {\"url\": \"/upload/1749801446546-horizon hr block-2.png\", \"label\": \"block-2\"}, {\"url\": \"/upload/1749801446547-horizon hr block-3.png\", \"label\": \"block-3\"}, {\"url\": \"/upload/1749801446546-horizon hr block-4.png\", \"label\": \"block-4\"}, {\"url\": \"/upload/1749801446545-horizon hr block-5.png\", \"label\": \"block-5\"}]','[{\"role\": \"HR Manager, BlueCore Technologies\", \"quote\": \"Horizon HR has completely transformed how we manage our workforce. From seamless onboarding to automated payroll and real-time attendance tracking ΓÇö everything is just smooth and efficient. WeΓÇÖve cut our manual HR tasks by more than 60%.\", \"author\": \"Ritika Sharma\"}, {\"role\": \"COO\", \"quote\": \"We needed a scalable HR solution that didnΓÇÖt require a full-time admin team. Horizon HR gave us that ΓÇö and more. The AI-powered features like smart recruitment and compliance automation save us hours every week and keep us fully audit-ready\", \"author\": \"Aditya Mehta\"}]','2025-06-13 07:57:26.668','2025-06-13 09:22:56.573','Streamline hiring, payroll, compliance, and more ΓÇö all in one smart, AI-powered platform.','Ready to Elevate Your HR Game?','[]','',0,'','','/upload/1749804716304-horizon hr_last section (5).png',NULL),('NeuroBot','Neuro Bot','NeuroBot transforms your business with real-time AI support, automating customer interactions and team tasks ΓÇö seamlessly integrated with your existing web apps.','≡ƒñû','/upload/1749469201487-neurobot hero image.png','[{\"desc\": \"Handle FAQs, schedule calls, and convert visitors into leadsΓÇö24/7.\", \"title\": \"≡ƒùú∩╕Å Smart Customer Conversations\", \"number\": 1}, {\"desc\": \"Set reminders, take meeting notes, and streamline workflows via Slack, Teams, or email.\", \"title\": \"≡ƒºæΓÇì≡ƒÆ╝ Team Collaboration Assistant\", \"number\": 2}, {\"desc\": \"Plug into your existing website, CRM, or helpdeskΓÇöno code required.\", \"title\": \"ΓÜÖ∩╕Å Web App Integration\", \"number\": 3}, {\"desc\": \"Track response quality, resolution time, and user satisfaction automatically.\", \"title\": \"≡ƒôè Analytics & Insights\", \"number\": 4}, {\"desc\": \"GDPR-compliant, end-to-end encrypted communication.\", \"title\": \"≡ƒöÆ Enterprise-Grade Security\", \"number\": 5}, {\"desc\": \"Works with your CRM, email, calendar, and chat tools.\", \"title\": \"≡ƒöä Auto-Sync with Your Systems\", \"number\": 6}]','[{\"url\": \"/upload/1749465839968-neurobot block-1.png\", \"label\": \"block-1\"}, {\"url\": \"/upload/1749465840093-neurobot_block-2.png\", \"label\": \"block-2\"}, {\"url\": \"/upload/1749465839837-neurobot blocl3.png\", \"label\": \"block-3\"}, {\"url\": \"/upload/1749465839939-neurobot_block-4.png\", \"label\": \"block-4\"}, {\"url\": \"/upload/1749465839926-neurobot_block-5.png\", \"label\": \"block-5\"}]','[{\"role\": \"Head of Customer Experience, Cartzoo India\", \"quote\": \"Before NeuroBot, our support team was buried under repetitive queries. Now, over 65% of those are resolved instantly by the bot ΓÇö without human intervention. ItΓÇÖs like adding a tireless agent to our team who never sleeps and always gets it right.\", \"author\": \" Ananya Rao\"}, {\"role\": \"Operations Manager, DevSphere Technologies\", \"quote\": \"NeuroBot has become our go-to internal assistant. From sending daily stand-up summaries to reminding our team of key tasks in Slack, itΓÇÖs reduced so much back-and-forth. Setup was surprisingly smooth ΓÇö we were live in 2 days!\", \"author\": \"Ravi Mehta\"}]','2025-06-09 09:46:25.252','2025-06-09 11:40:09.120','Let NeuroBot handle the repetitive stuff ΓÇö so your team can focus on what really matters.\nInstant setup. No coding. Smarter from Day One.','Ready to Experience AI That Actually Works?','[\"≡ƒòÆ 24/7 Instant Responses\", \"≡ƒñû AI That Understands Context\", \"≡ƒöî Plug & Play Integrations\", \"≡ƒôè Built-in Analytics\", \"≡ƒºæΓÇì≡ƒÆ╝ Internal Team Assistant\", \"≡ƒöÆ Enterprise-Grade Security\"]','/upload/1749469204206-neurobot hero image.png',0,'','Smarter Conversations. Seamless Connections. Real Results.','/upload/1749462639181-neurbotl ast section (3).png',NULL),('ProdFlow','ProdFlow','Optimize operations, automate processes, and monitor production in real time ΓÇö all from one powerful platform.','≡ƒÅ¡','/upload/1749811528386-Prodflow HERO section.png','[{\"desc\": \"Easily create, adjust, and visualize production timelines. Avoid delays and optimize resource allocation with dynamic scheduling tools.\", \"title\": \"≡ƒôà Production Planning & Scheduling\", \"number\": 1}, {\"desc\": \"Track every stage of production live ΓÇö from raw materials to finished goods. Get instant updates on job status, delays, and bottlenecks.\", \"title\": \"≡ƒæÇ Real-Time Workload Monitoring\", \"number\": 2}, {\"desc\": \"Automatically assign tasks to teams or machines based on workload capacity, availability, and priority. Reduce manual intervention and human error.\", \"title\": \"≡ƒñû Automated Task Assignments\", \"number\": 3}, {\"desc\": \"Seamlessly integrate inventory management with production planning. Get notified about shortages, reorder points, and material consumption\", \"title\": \"≡ƒÅ╖∩╕Å Inventory & Material Sync\", \"number\": 4}, {\"desc\": \"Stay informed with intelligent alerts on task completion, idle time, equipment downtime, and deviations from plan.\", \"title\": \"≡ƒöö Alerts & Smart Notifications\", \"number\": 5}, {\"desc\": \"Access a unified dashboard with KPIs, timelines, and performance metrics. Export detailed reports for management and stakeholders.\", \"title\": \"≡ƒôè Centralized Dashboard & Reporting\", \"number\": 6}]','[{\"url\": \"/upload/1749811528910-prodflow block-1.png\", \"label\": \"block-1\"}, {\"url\": \"/upload/1749811528937-prodflow block-1 (1).png\", \"label\": \"block-2\"}, {\"url\": \"/upload/1749811528941-prodflow block-1 (2).png\", \"label\": \"block-3\"}, {\"url\": \"/upload/1749811528941-prodflow block-1 (3).png\", \"label\": \"block-4\"}, {\"url\": \"/upload/1749811528938-prodflow block-1 (4).png\", \"label\": \"block-5\"}]','[{\"role\": \"Operations Head\", \"quote\": \"ProdFlow has transformed how we manage our production floor.\\\" ΓÇ£Before ProdFlow, our team was juggling spreadsheets and constant status meetings. Now, everything is in one place ΓÇö from task allocation to live production tracking. We\'ve cut down downtime by nearly 30% in just two months.\", \"author\": \"Amit Rathi\"}, {\"role\": \"Plant Manager\", \"quote\": \"A must-have for any growing manufacturing business.\\\" ΓÇ£The automation features are a game changer. Task assignments, inventory sync, alerts ΓÇö it just works. Our supervisors have better visibility, and our machines run with fewer interruptions. ItΓÇÖs like having a digital production manager.\", \"author\": \"Neha Kulkarni\"}]','2025-06-13 10:45:29.077','2025-06-13 10:45:29.077','Start optimizing your production workflows with real-time insights and smart automation ΓÇö all in one place.\nExperience the power of ProdFlow today and transform the way your team works.','Ready to Take Control of Your Manufacturing Operations?','[]','',0,'','','/upload/1749811528603-prod flow _last section.png',NULL),('ProptikAI','ProptikAI','A unified real estate business management platform that centralizes property listings, streamlines operations, and drives growth through powerful analytics.','≡ƒÅó','/upload/1749290270423-real estate_hero image (1).png','[{\"desc\": \"Sync your property listings and updates instantly across Bitrix24, Bayut, Dubizzle, Property Finder, and your website ΓÇö without lifting a finger twice.\", \"title\": \"Real-Time Marketplace Sync\", \"number\": 1}, {\"desc\": \"Client and deal information is protected through enterprise-grade security protocols, ensuring safe handling of sensitive real estate data.\", \"title\": \"Secure, Encrypted Data Transfers\", \"number\": 2}, {\"desc\": \"Whether you\'re a solo agent or a growing agency, ProptikAI is built to handle high-volume data flows with consistent speed and reliability.\", \"title\": \"Optimized for Scale and Speed\", \"number\": 3}]','[{\"url\": \"/upload/1749290271248-Proptikai_block-1 (1).png\", \"label\": \"block-1\"}, {\"url\": \"/upload/1749290271403-Proptikai_block-2.png\", \"label\": \"block-2\"}, {\"url\": \"/upload/1749290271453-Proptikai_block-3 (2).png\", \"label\": \"block-3\"}, {\"url\": \"/upload/1749290271285-Proptikai_block4.png\", \"label\": \"block-4\"}, {\"url\": \"/upload/1749290271403-Proptikai_block-5 (2).png\", \"label\": \"block-5\"}]','[{\"role\": \"Axis Realty Dubai\", \"quote\": \"ProptikAI has changed how we run our agency. Everything flows through Bitrix24.\", \"author\": \"Ravi S.\"}, {\"role\": \"Dream Home Properties\", \"quote\": \"Lead capture and follow-ups used to be our biggest headache. With ProptikAI and Bitrix24, itΓÇÖs automated.\", \"author\": \"Fatima K.\"}]','2025-06-06 19:20:18.609','2025-06-07 10:05:47.859','Let ProptikAI help you streamline your operations and drive growth with our comprehensive real estate management platform.','Ready to transform your real estate business?','[\"Centralized property listings & CRM\", \"Real-time lead tracking and analytics\", \"Marketing automation and campaign tools\", \"Integrated payment and document management\", \"Scalable for solo agents and large enterprises\"]','/upload/1749290270691-real estate_hero image (1).png',1,'A unified real estate business management platform that centralizes property listings, streamlines operations, and drives growth through powerful analytics.','Real Estate Bridge ΓÇô Your All-in-One Property Management Solution','/upload/1749290746420-proptikai_last section (2).png','https://bitrix.proptikai.com/'),('Resolve Desk','Resolve Desk','Deliver faster responses, automate repetitive tasks, and keep every ticket on track ΓÇö all from one powerful helpdesk platform','ΓÜÖ∩╕Å','/upload/1749284486975-resolve desk hero image-1 (3).png','[{\"desc\": \"Automatically assign incoming tickets to the right agents or teams using custom rules ΓÇö reducing delays and improving response accuracy.\", \"title\": \"≡ƒöü Automated Ticket Routing\", \"number\": 1}, {\"desc\": \"Bring email, chat, web forms, and phone support into one simple dashboard, so nothing slips through the cracks.\", \"title\": \"≡ƒôÑ Unified Multi-Channel Inbox\", \"number\": 2}, {\"desc\": \"Visualize performance with live metrics ΓÇö from resolution times to customer satisfaction ΓÇö and make smarter, data-backed decisions.\", \"title\": \"≡ƒôè Real-Time Dashboards & Reporting\", \"number\": 3}, {\"desc\": \"Publish help articles and FAQs so customers can resolve common queries on their own, anytime.\", \"title\": \"≡ƒôÜ Built-in Knowledge Base\", \"number\": 4}, {\"desc\": \"Mention teammates, share internal notes, and resolve issues faster ΓÇö together.\", \"title\": \"≡ƒñ¥ Collaboration Tools\", \"number\": 5}, {\"desc\": \"Automate repetitive actions like tagging, updates, and follow-ups to boost productivity.\", \"title\": \"≡ƒñû Smart Workflow Automation\", \"number\": 6}]','[{\"url\": \"/upload/1749279679248-resolve  deskblock-1.png\", \"label\": \"block-1\"}, {\"url\": \"/upload/1749279679336-resolve desk block-1.png\", \"label\": \"block-2\"}, {\"url\": \"/upload/1749279679363-resolve  desk block-3.png\", \"label\": \"block-3\"}, {\"url\": \"/upload/1749279679284-resolve  desk block-3 (1).png\", \"label\": \"block-4\"}, {\"url\": \"/upload/1749279679337-resolve  desk block-3 (2).png\", \"label\": \"block-5\"}]','[{\"role\": \"Director\", \"quote\": \"Resolve Desk transformed how we handle support.ΓÇ¥ ΓÇ£Before Resolve Desk, we were juggling tickets across emails and spreadsheets. Now, everythingΓÇÖs in one place ΓÇö our team responds faster, customers are happier, and our managers finally have visibility into what\'s going on.ΓÇ¥\", \"author\": \"Priya S.\"}]','2025-06-07 07:01:19.761','2025-06-09 09:26:05.250','Get started with Resolve Desk today and transform the way your team handles tickets ΓÇö faster resolutions, smarter workflows, and happier customers.','Smarter Support Starts with Resolve.','[\"≡ƒÜÇ Quick setup ΓÇö Get started in minutes\", \"ΓÜí Boost team productivity with automation\"]','/upload/1749292177251-resolve desk_last section (3).png',1,'\"Resolve Desk transformed how we handle support.ΓÇ¥','Support Made Simple. Resolutions Made Fast.','/upload/1749292176851-resolve desk_last section (3).png','https:// www.google.co.in'),('Task Mind','Task Mind','Boost productivity with TaskMind ΓÇö your intelligent project management assistant that automates workflows, delivers real-time insights, and helps your team stay on track.','≡ƒºá','/upload/1749545563968-neurobot hero image.png','[{\"desc\": \"Automatically recommends next steps based on team priorities, task dependencies, and project goals.\", \"title\": \"≡ƒñû Smart Task Suggestions\", \"number\": 1}, {\"desc\": \"Eliminates repetitive tasks by automating reminders, task assignments, and follow-ups using intelligent triggers.\", \"title\": \"≡ƒöü Workflow Automation\", \"number\": 2}, {\"desc\": \"Get instant meeting summaries, project status briefs, and daily to-dos ΓÇö auto-generated and sharable.\", \"title\": \"≡ƒºá AI Summaries & Recaps\", \"number\": 3}, {\"desc\": \"Forecast potential delays, resource constraints, or bottlenecks using data from ongoing and past projects.Forecast potential delays, resource constraints, or bottlenecks using data from ongoing and past projects.\", \"title\": \"≡ƒôê Predictive Progress Tracking\", \"number\": 4}, {\"desc\": \"Create, update, and manage tasks by simply typing or speaking your request ΓÇö no clicking around\", \"title\": \"≡ƒÆ¼ Natural Language Commands\", \"number\": 5}, {\"desc\": \"Visual, real-time analytics dashboards with smart alerts and actionable insights to improve team performance.\", \"title\": \"≡ƒôè Insightful Dashboards\", \"number\": 6}]','[{\"url\": \"/upload/1749545574966-neurobot_block-5.png\", \"label\": \"block-1\"}, {\"url\": \"/upload/1749545574875-neurobot_block-5.png\", \"label\": \"block-2\"}, {\"url\": \"/upload/1749545575599-neurobot_block-5.png\", \"label\": \"block-3\"}, {\"url\": \"/upload/1749545575524-neurobot_block-5.png\", \"label\": \"block-4\"}, {\"url\": \"/upload/1749545575841-neurobot_block-5.png\", \"label\": \"block-5\"}]','[{\"role\": \" Product Lead\", \"quote\": \"TaskMind has taken 30% of our project workload off our plate. The AI reminders and suggestions are game changers\", \"author\": \"Amit\"}, {\"role\": \"Operations Manager\", \"quote\": \"ItΓÇÖs like having a smart assistant that never forgets or misses a beat.\", \"author\": \"Marcus T\"}]','2025-06-10 08:53:07.911','2025-06-10 08:53:07.911','Task Mind makes intelligent project management effortless.','≡ƒÄ» Start Smarter Today','[]','',0,'','Your Intelligent Project Management Companion','/upload/1749545566546-neurbotl ast section (3).png',NULL);
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `project`
--

DROP TABLE IF EXISTS `project`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `project` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `title` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `fullDesc` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `previewImage` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tools` json NOT NULL,
  `features` json NOT NULL,
  `examples` json NOT NULL,
  `statistics` json NOT NULL,
  `testimonial` json NOT NULL,
  `isActive` tinyint(1) NOT NULL DEFAULT '1',
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL,
  `category` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `Project_slug_key` (`slug`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `project`
--

LOCK TABLES `project` WRITE;
/*!40000 ALTER TABLE `project` DISABLE KEYS */;
INSERT INTO `project` VALUES ('cf8c879a-5863-4aba-8a23-fbb9535bcf75','Custom Software 4','future-of-saas-ai-market',' Designed to streamline core processesΓÇöfrom procurement to assembly enables operational excellence by connecting data, people, and production flows in one unified dashboard.  Built for factory floors and back-end operations alike, it simplifies resource planning, reduces waste, and increases throughput without overloading teams.','<ul><li><p>Familiar, WhatsApp-style experience that users love</p></li><li><p>Built on powerful AI and NLP engines</p></li><li><p>Reduces time spent on dashboards and tools</p></li><li><p>Boosts team responsiveness and collaboration</p></li><li><p>Backed by SkyshineΓÇÖs proven tech stack and reliability</p></li></ul>','/upload/1749276122286-piclumen-1748330849237.png','[{\"icon\": \"≡ƒÉÿ\", \"name\": \"PostgreSQL\"}, {\"icon\": \"≡ƒÄ¿\", \"name\": \"TailwindCSS\"}, {\"icon\": \"ΓÜô\", \"name\": \"Kubernetes\"}, {\"icon\": \"≡ƒÉ¼\", \"name\": \"MySQL\"}]','[]','[]','{\"clients\": 99, \"experience\": 3, \"satisfaction\": 99}','{\"role\": \" COO, TechStream\", \"quote\": \"My team adopted it instantly. It feels like chatting on WhatsApp, but youΓÇÖre actually managing projects and getting real insights.\\\"\", \"author\": \"Zain A., COO, TechStream\"}',1,'2025-06-07 06:02:02.590','2025-06-07 06:02:02.590','Mobile Apps');
/*!40000 ALTER TABLE `project` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `projects`
--

DROP TABLE IF EXISTS `projects`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `projects` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `title` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tagline` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `previewImage` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `category` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `isActive` tinyint(1) NOT NULL DEFAULT '1',
  `problemSolution` json NOT NULL,
  `proofOfConcept` json NOT NULL,
  `experienceSection` json NOT NULL,
  `modulesSection` json NOT NULL,
  `processSection` json NOT NULL,
  `ctaSection` json NOT NULL,
  `impactSection` json NOT NULL,
  `statisticsSection` json NOT NULL,
  `testimonialsSection` json NOT NULL,
  `techStackSection` json NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `Projects_slug_key` (`slug`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `projects`
--

LOCK TABLES `projects` WRITE;
/*!40000 ALTER TABLE `projects` DISABLE KEYS */;
INSERT INTO `projects` VALUES ('91c382cf-00e8-463c-bdd6-cd52fdd6b647','Smart Sales CRM','Close more deals ΓÇö automatically','<p><strong>Our AI-powered CRM eliminates manual data entry and surfaces the next best action for every lead.</strong></p>','/upload/1750441396915-26.jpg','smart-sales-crm','CRM',1,'{\"heading\": \"The Problem & Our Solution\", \"features\": [{\"image\": \"/upload/1750441403821-26.jpg\", \"title\": \"Auto-capture emails & calls\", \"imageFile\": {}, \"description\": \"Every customer touchpoint is logged without lifting a finger.\"}, {\"image\": \"/upload/1750441404918-26.jpg\", \"title\": \"AI next-step coach\", \"imageFile\": {}, \"description\": \"Dynamic suggestions boost conversion rates by 18 %.\"}], \"idealFor\": [\"B2B SaaS\", \"Inside sales\", \"Start-ups\"], \"problemTitle\": \"Manual data entry is killing productivity\", \"problemImages\": [\"/upload/1750441399595-26.jpg\"], \"solutionTitle\": \"Automation that works out-of-the-box\", \"problemImageFiles\": [{}], \"problemDescription\": \"Reps spend over 30 % of their day logging calls, updating fields and hunting for information.\", \"solutionDescription\": \"Smart Sales captures every interaction automatically and recommends the next step so your pipeline never stalls.\\n\"}','{\"heading\": \"Proof of Concept\", \"samples\": [{\"href\": \"https://figma.com/proto/demo\", \"image\": \"/upload/1750441409986-26.jpg\", \"title\": \"Live dashboard preview\", \"imageFile\": {}, \"description\": \"Interactive Figma prototype\"}, {\"href\": \"Drag-and-drop automation flow\", \"image\": \"/upload/1750441409249-26.jpg\", \"title\": \"Workflow builder\", \"imageFile\": {}, \"description\": \"Drag-and-drop automation flow\"}], \"description\": \"See the prototype in action and explore how quickly it delivers value.\\n\"}','{\"image\": \"/upload/1750441413062-26.jpg\", \"bullets\": [\"HubSpot & Salesforce certified\", \"24/7 enterprise support\", \"Security & compliance baked in\"], \"heading\": \"Our experince\", \"imageFile\": {}, \"description\": \"10+ years building revenue-driving tools for high-growth teams.\", \"highlightedText\": \"120+ CRM roll-outs ΓÇó 3 M daily active reps\"}','{\"heading\": \"Key Modules\", \"modules\": [{\"icon\": \"≡ƒÆ╗\", \"text\": \"Lead Capture\"}, {\"icon\": \"≡ƒñû\", \"text\": \"AI Scoring\"}, {\"icon\": \"≡ƒôè\", \"text\": \"Revenue Forecasting\"}, {\"icon\": \"≡ƒöÆ\", \"text\": \"Role-based Security\"}], \"description\": \"Choose just the pieces you need today and add more later.\"}','{\"image\": \"/upload/1750441415649-26.jpg\", \"heading\": \"Our Process\", \"imageFile\": {}, \"description\": \"From discovery to launch in under 6 weeks ΓÇö hereΓÇÖs how.\"}','{\"cost\": \"$99 / mo\", \"text\": \"Book a 30-minute strategy call and get a custom ROI projection.\", \"heading\": \"Ready to super-charge your pipeline?\", \"buttonHref\": \"https://calendly.com/demo\", \"buttonText\": \"Book a demo\"}','{\"heading\": \"Impact & Results\", \"impacts\": [{\"highlight\": [{\"icon\": \"≡ƒÜÇ\", \"bullet\": \"Γåæ 32 % More deals / rep\"}, {\"icon\": \"≡ƒöÑ\", \"bullet\": \"Γåô 28 % Manual data entry\"}, {\"icon\": \"ΓÜí\", \"bullet\": \"Γåô 28 % Manual data coding\"}], \"statImage\": \"/upload/1750441420443-26.jpg\", \"statImageFile\": {}}, {\"highlight\": [{\"icon\": \"≡ƒÜÇ\", \"bullet\": \"99.9 % Uptime SLA\"}, {\"icon\": \"≡ƒöÆ\", \"bullet\": \"GDPR & SOC-2 compliant\"}], \"statImage\": \"/upload/1750441420824-26.jpg\", \"statImageFile\": {}}], \"description\": \"From day-one automation to measurable ROI, hereΓÇÖs what youΓÇÖll get.\"}','{\"heading\": \"Statistics\", \"statistics\": [{\"value\": \"12 k+\", \"statLabel\": \"Active users\"}, {\"value\": \"50+\", \"statLabel\": \"Integrations\"}, {\"value\": \"42\", \"statLabel\": \"Countries served\"}]}','{\"heading\": \"What Customers Say\", \"testimonials\": [{\"role\": \"VP Sales, GrowthHub\", \"quote\": \"We shaved hours off every repΓÇÖs week and grew ARR by 40 % in six months.\", \"author\": \"Alex Kim\"}]}','{\"heading\": \"Built on Modern Tech\", \"description\": \"Scalable, secure and battle-tested technologies.\", \"technologies\": [{\"icon\": \"ΓÜí\", \"name\": \"Next.js\"}, {\"icon\": \"≡ƒÆ╛\", \"name\": \"PostgreSQL\"}, {\"icon\": \"Γÿü∩╕Å\", \"name\": \"AWS\"}, {\"icon\": \"≡ƒºá\", \"name\": \"LangChain\"}]}','2025-06-20 17:43:41.047','2025-06-20 17:43:41.047');
/*!40000 ALTER TABLE `projects` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-07-02 23:28:03
