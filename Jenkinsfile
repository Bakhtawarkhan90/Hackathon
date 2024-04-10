pipeline{
    agent any
    stages{
        stage("clonning the code"){
            steps{
                echo "clonning code"
                git url:"https://github.com/Bakhtawarkhan90/Hackathon.git/", branch: "main"
            }
        }
        stage("Building image"){
            steps{
                echo "Building image"
                sh "docker build . -t bakhtawar375/hackathon"
            }
        }
        stage("Pushing to DockerHub"){
            steps {
                echo "Pushing the image to docker hub"
                withCredentials([usernamePassword(credentialsId:"dockerHub",passwordVariable:"dockerHubPass",usernameVariable:"dockerHubUser")]){
                    sh 'docker login -u ${dockerHubUser} -p "${dockerHubPass}"'
                    sh 'docker push ${dockerHubUser}/hackathon:latest'
                }
            }
        }
        stage("Deploying the code"){
            steps{
                echo "Deploy"
                sh "docker-compose down && docker-compose up -d "
            }
        }
    }
}
