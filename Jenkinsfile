pipeline {
    agent any

    environment {
        IMAGE_NAME = "vasanth4747/education-animation"
        TAG = "v1"
        DOCKER_USERNAME = "vasanth4747"
        DOCKER_PASSWORD = "vasanth@47"  // Not secure - avoid using in production
        KUBECONFIG = "/home/vasanth47/.kube/config"  // Set the correct kubeconfig path
    }

    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'main', url: 'https://github.com/vasanthvk47/krish-dev.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    docker.build("${IMAGE_NAME}:${TAG}")
                }
            }
        }

        stage('Push to Docker Hub') {
            steps {
                script {
                    sh "echo $DOCKER_PASSWORD | docker login -u $DOCKER_USERNAME --password-stdin"
                    docker.image("${IMAGE_NAME}:${TAG}").push()
                }
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                script {
                    sh 'kubectl apply -f k8s/deployment.yaml --validate=false'
                    sh 'kubectl apply -f k8s/service.yaml --validate=false'
                }
            }
        }
        stage('Test') {
        steps {
        script {
            // Run unit tests
            sh 'npm run test'
        }
    }
}

    }
}
