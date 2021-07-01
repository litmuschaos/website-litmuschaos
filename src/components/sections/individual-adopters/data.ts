const adoptersData = [
  {
    key: "redhat",
    heading:
      "Testing the maturity of the Red Hat Openshift Virtualization solution using chaos testing.",
    subheading:
      "Red Hat is an enterprise software company with an open source development model and building software that pushes the boundaries of technology.",
    company: "Red Hat",
    videoUrl: "https://www.youtube.com/embed/VITGHJ47gx8",
  },
  {
    key: "orange",
    heading: "Validating the resiliency of Orange’s private telco.",
    subheading:
      "Orange S.A., formerly France Télécom S.A., stylized as france telecom, is a French multinational telecommunications corporation.",
    company: "Orange",
    videoUrl: "https://www.youtube.com/embed/UOhjFbCrncw",
  },
  {
    key: "kitopi",
    heading: "Continuously testing our system’s resiliency.",
    subheading:
      "Kitopi is the world’s leading state-of-the-art, managed cloud kitchen platform with over 1000 employees across UAE, KSA and Kuwait.",
    company: "Kitopi",
  },
  {
    key: "lenskart",
    heading:
      "Tackling some major downtimes of our platform using Chaos Engineering with LitmusChaos.",
    subheading:
      "With technology integration into the eyewear vertical, and keeping a deep focus on consumer happiness, Lenskart has grown more than 100% Year on Year in the last 2 years to become the largest optical business of India today.",
    company: "Lenskart",
    videoUrl: "https://www.youtube.com/embed/-fDnaj0Vlas",
  },
  {
    key: "halodoc",
    heading:
      "Leverage to test the resiliency of multi k8s cluster workloads in a private cloud.",
    subheading:
      "HaloDoc is a healthcare network platform. HaloDoc connects users to a network of 19,000 licensed doctors, 1,000 certified partner pharmacies through medical delivery service ApotikAntar, and licensed medical laboratory services.",
    company: "Halodoc",
  },
  {
    key: "anutanetworks",
    heading:
      "To test the resiliency of our platform and also verify the observability of the stack.",
    subheading:
      "Anuta Networks is a leading provider of Web-Scale On-prem and Cloud Network Orchestration and Assurance software for the branch, campus, data center and service provider-managed multi-vendor enterprise networks.",
    company: "Anuta Networks",
    videoUrl: "https://www.youtube.com/embed/xmUkH6eDAC4",
  },
  {
    key: "intuit",
    heading:
      "Testing reliability of our next-gen platform on Kubernetes Keiko.",
    subheading:
      "Intuit is the brand that disrupts, innovates, obsesses with its customers & remains uncompromised on its employees first policy with the mission of powering prosperity. Engineers who are building Intuit products for taxation, small business accounting, and personal financial management for customers all over the world.",
    company: "Intuit",
    videoUrl: "https://www.youtube.com/embed/Ohj0VrwmQWs",
  },
];

// -------------------------------------------------------------------------------------------------------

const adoptersContent = [
  {
    key: "redhat",
    why: {
      heading: "Why do we use Litmus?",
      subtext:
        "We wanted to test the maturity of the Red Hat Openshift Virtualization solution using chaos testing. Following that, we decided to use Litmus for these reasons:",
      list: [
        "It's an Open Source project",
        "It has a wide selection of experiments available",
        "It's a CNCF sandbox project",
        "There are frequent releases and it is well maintained",
      ],
    },
    how: {
      heading: "How do we use Litmus?",
      subtext:
        "Litmus experiments are deployed against a single Openshift cluster that runs on top of a baremetal server using libvirt/KVM. Each experiment consists of observing the behavior upon applying chaos to the underlying infrastructure of a running VMI pod instance and validating the results of the probes. The chaos we inject to the VMs that host the openshift nodes can vary from triggering reboots, sudden shutdowns, suspend the node, and network disruption at the node level, among others.",
    },
    benefits: {
      heading: "Benefits in using Litmus.",
      subtext:
        "Being a cloud-native solution, Litmus allows us to define our experiment and expectations in the chaosexperiment manifest and retrieve the results in the chaosresult object generated at runtime. Its vast selection of experiments, periodic release cadence, and welcoming community were sufficient signals that ensured with Litmus we would achieve our goal.",
    },
    other: {
      heading: "Other Resources",
      videoUrl: "https://youtu.be/VITGHJ47gx8",
      quote:
        "“Litmus was our top choice when it came to developing our cloud native chaos scenarios: it’s extensive list of experiments, open source nature, and friendly community gave us all the ingredients we needed to successfully complete our goals.”",
      author: "Jordi Gil",
      designation: "Senior Software Engineer at Red Hat",
    },
  },
  {
    key: "orange",
    why: {
      heading: "Why we explored Litmus?",
      subtext:
        "We wanted a tool that we could leverage to test the containerized control plane of our private cloud, so we came across Litmus, it has the following benefits.",
      list: [
        "It is designed for Kubernetes workload",
        "It has a wide variety of generic test cases for Kubernetes workload and Infrastructure",
        "It can be used to trigger customized validations",
        "It is easy to Integrate with our existing automation framework",
      ],
    },
    how: {
      heading: "How we explored litmus?",
      subtext:
        "We explored Litmus to validate the resiliency of our private telco cloud by covering the following areas.",
      list: [
        "Testing resiliency of Control plane Kubernetes Infrastructure",
        "Validating the HA of different control plane services",
        "Testing interdependency among different open source applications",
      ],
    },
    benefits: {
      heading: "Benefits in using Litmus.",
      subtext:
        "Litmus has a wide variety of generic test cases for Kubernetes workload and Infrastructure and provides a very easy way for end-to-end automation of resiliency test cases.",
    },
    other: {
      heading: "Other Resources",
      videoUrl: "https://youtu.be/UOhjFbCrncw",
      quote:
        "“Litmus is a great tool that offers out of the box generic chaos tests with different types of probes for performing validations at different time during the experiment which make automation easy”",
      author: "Samar",
      designation: "Lead Engineer at Orange",
    },
  },
  {
    key: "kitopi",
    why: {
      heading: "Why do we use Litmus?",
      subtext:
        "We started out using Litmus when searching for chaos testing tools, to continuously test our resiliency. It turned out to be really easy to implement and intuitive to use",
    },
    how: {
      heading: "How we explored litmus?",
      subtext:
        "On our stage environment we run nightly pipelines consisting of:",
      list: [
        "Traffic source (Locust.io performance tests)",
        "Litmus Chaos experiments",
        "Results evaluation using Keptn Which provide us with the information about",
      ],
    },
    benefits: {
      heading: "Benefits in using Litmus.",
      subtext:
        "Litmus lets us easily incorporate simple chaos experiments into already existing clusters. Since it provides native Kubernetes support, it's easy to understand and modify. Also, the LitmusChaos community is nothing short of exceptional, so that's a bonus!",
    },
    other: {
      quote:
        "“Litmus let's us easily incorporate simple chaos experiments into already existing clusters. Since it provides native Kubernetes support, it's easy to understand and modify. Also, LitmusChaos community is nothing short of exceptional, so that's a bonus!”",
      author: "Adrian Gonciarz",
      designation: "Lead Q/A Engineer at Kitopi",
    },
  },
  {
    key: "lenskart",
    why: {
      heading: "Motivation",
      subtext:
        "Lenskart not only serves fashion products to customers but also power eyeglasses and contact lenses which are custom made for every customer. This makes it a very niche product as well as a company serving essentials commodities for its customers. Delivery and ease of ordering from online and offline stores are what we take very seriously. Any downtime could cost not only business but also could impact the delivery of his/her eyeglasses or contact lenses. As an engineering team that is always accepting challenges, we started looking at chaos engineering very seriously once we also faced some major downtimes in our platform due to system failure or DDOS attacks. It didn't take us time to realize that just running shop on the cloud was not good enough we have to be prepared for chaotic situations, not just that, we also have to simulate it and find weak points in our architecture. So, we first started with manual and scripted chaos, but the problem was that they were hard to reproduce and involved a lot of effort to plan and execute them. Then we started exploring if we could have a framework that could help us maintain our chaos experiments in form of templates. After looking at a couple of tools we narrowed down on Litmus.",
    },
    how: {
      heading: "How are we using litmus?",
      subtext:
        "We started using Litmus from our DevOps Kubernetes cluster, where we first started to test stateful services like Redis cluster or elastic search. We then gradually started testing our own application services using Litmus. We have gradually moved from our integration environments to pre-production. We are regularly maturing our hypothesis and writing relevant experiments for these services. Currently, we haven't integrated these experiments into our CI/CD pipelines but in the future, we have plans to run these experiments with every release.",
    },
    benefits: {
      heading: "Benefits in using Litmus.",
      subtext:
        "We are quite new to the Litmus framework but what we have really gained from Litmus is templating of our chaos experiments and able to maintain them in our CVS. This has really helped us with the reproducibility of the experiments. It has opened new opportunities for us where we can write our own custom experiments which might be very specific targetting our in-house and public services. We have started ranking the experiments and adding them to our experiment suite so that we could now measure the resiliency of our services. This would also help us in the future to be more targeted in our resiliency journey.",
    },
    other: {
      heading: "Other Resources",
      blogUrl:
        "https://blog.lenskart.com/lenskarts-approach-to-chaos-engineering-part-2-6290e4f3a74e",
      videoUrl: "https://youtu.be/UOhjFbCrncw",
    },
  },
  {
    key: "halodoc",
    why: {
      heading: "Why we explored Litmus?",
      subtext:
        "We wanted a tool that we could leverage to test the resiliency of multi k8s cluster workloads in a private cloud, after evaluating different tools of similar flavor, we wanted to exercise our chaos experiments using Litmus, as it has the following benefits.",
      list: [
        "It is designed for Kubernetes workload",
        "It has a wide range of chaos experiments to perform on k8s workload and Infrastructure",
        "It has litmus portal as a control plane to target chaos experiments against multiple k8s clusters within our organization.",
        "It has Prometheus integration, able to see in the litmus portal dashboard how each of the workflow chaos experiments performs.",
        "It fits into our gitops flow to enable end-to-end automation.",
      ],
    },
    how: {
      heading: "How we use litmus?",
      subtext:
        "At Halodoc we use Litmus to validate the resiliency of our private aws managed eks by covering the following areas.",
      list: [
        "Testing resiliency of Control plane Kubernetes Infrastructure",
        "Validating the HA of different control plane services",
        "Target SRE tools at k8s clusters, benchmark it based on several parameters.",
      ],
    },
    benefits: {
      heading: "Benefits in using Litmus.",
      subtext:
        "Litmus has a wide variety of chaos experiments for Kubernetes workload and Infrastructure and provides a very easy way for end-to-end automation of resiliency test cases.",
    },
    other: {
      cta:
        "Leverage to test the resiliency of multi k8s cluster workloads in a private cloud.",
    },
  },
  {
    key: "anutanetworks",
    why: {
      heading: "Why do we need Chaos Tooling?",
      subtext:
        "We wanted to test the resiliency of our platform and also verify the observability of the stack. Below are the primary reasons to go with Litmus",
      list: [
        "The resiliency of k8s Infrastructure - OnPrem and Cloud",
        "Observability Validations",
      ],
    },
    how: {
      heading: "What makes us go with Litmus?",
      list: [
        "It's an Open Source project",
        "It has a wide selection of experiments available",
        "K8s Native Implementation",
        "It's a CNCF sandbox project",
        "It has a vibrant community",
        "There are frequent releases and it is well maintained",
      ],
    },
    benefits: {
      heading: "Benefits in using Litmus.",
      subtext:
        "Litmus has a wide variety of generic test cases for Kubernetes workload and Infrastructure and provides a very easy way for end-to-end automation of resiliency test cases.",
    },
    other: {
      heading: "Other Resources",
      videoUrl: "https://youtu.be/UOhjFbCrncw",
      quote:
        "“Litmus is a great tool that offers out of the box generic chaos tests with different types of probes for performing validations at different time during the experiment which make automation easy”",
      author: "Samar",
      designation: "Lead Engineer at Orange",
    },
  },
  {
    key: "intuit",
    why: {
      heading: "Why we explored Litmus?",
      subtext:
        "We wanted a tool that we could leverage to test the containerized control plane of our private cloud, so we came across Litmus, it has the following benefits.",
      list: [
        "It is designed for Kubernetes workload",
        "It has a wide variety of generic test cases for Kubernetes workload and Infrastructure",
        "It can be used to trigger customized validations",
        "It is easy to Integrate with our existing automation framework",
      ],
    },
    how: {
      heading: "How we explored litmus?",
      subtext:
        "We explored Litmus to validate the resiliency of our private telco cloud by covering the following areas.",
      list: [
        "Testing resiliency of Control plane Kubernetes Infrastructure",
        "Validating the HA of different control plane services",
        "Testing interdependency among different open source applications",
      ],
    },
    benefits: {
      heading: "Benefits in using Litmus.",
      subtext:
        "Litmus has a wide variety of generic test cases for Kubernetes workload and Infrastructure and provides a very easy way for end-to-end automation of resiliency test cases.",
    },
    other: {
      heading: "Other Resources",
      videoUrl: "https://youtu.be/Ohj0VrwmQWs?t=567",
      quote:
        "“Litmus is a great tool that offers out of the box generic chaos tests with different types of probes for performing validations at different time during the experiment which make automation easy”",
      author: "Samar",
      designation: "Lead Engineer at Orange",
    },
  },
];

export { adoptersData, adoptersContent };
