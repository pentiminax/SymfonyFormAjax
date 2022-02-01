<?php

namespace App\Controller;

use App\Form\Type\VideoType;
use App\Repository\VideoRepository;
use App\Service\VideoService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class HomeController extends AbstractController
{
    #[Route('/', name: 'home')]
    public function index(RequestStack $requestStack, VideoService $videoService, VideoRepository $videoRepo): Response
    {
        $request = $requestStack->getMainRequest();

        $videoForm = $this->createForm(VideoType::class, $videoRepo->new());

        $videoForm->handleRequest($request);

        if ($videoForm->isSubmitted()) {
            return $videoService->handleVideoFormData($videoForm);
        }

        return $this->render('home/index.html.twig', [
            'form' => $videoForm->createView(),
            'videos' => $videoRepo->findAll()
        ]);
    }
}
