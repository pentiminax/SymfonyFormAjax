<?php

namespace App\Service;

use App\Entity\Video;
use Doctrine\ORM\EntityManagerInterface;
use Twig\Environment;
use Symfony\Component\DependencyInjection\ParameterBag\ParameterBagInterface;
use Symfony\Component\Form\FormInterface;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Symfony\Component\HttpFoundation\JsonResponse;

class VideoService
{
    public function __construct(
        private EntityManagerInterface $em,
        private Environment $environment,
        private ParameterBagInterface $parameters
    ) {}

    public function handleVideoFormData(FormInterface $videoForm): JsonResponse
    {
        if ($videoForm->isValid()) {
            return $this->handleValidForm($videoForm);
        } else {
            return $this->handleInvalidForm($videoForm);
        }
    }

    private function handleValidForm(FormInterface $videoForm) : JsonResponse
    {
        /** @var Video $video */
        $video = $videoForm->getData();

        /** @var UploadedFile $uploadedThumbnail */
        $uploadedThumbnail = $videoForm['thumbnail']->getData();

        /** @var UploadedFile $uploadedVideo */
        $uploadedVideo = $videoForm['video']->getData();

        $newFileName = $this->renameUploadedFile($uploadedThumbnail, $this->parameters->get('thumbnails.upload_directory'));
        $video->setThumbnail($newFileName);

        $newFileName = $this->renameUploadedFile($uploadedVideo, $this->parameters->get('videos.upload_directory'));
        $video->setVideo($newFileName);

        $this->em->persist($video);
        $this->em->flush();

        return new JsonResponse([
            'code' => Video::VIDEO_ADDED_SUCCESSFULLY,
            'html' => $this->environment->render('home/video.html.twig', [
                'video' => $video
            ])
        ]);
    }

    private function handleInvalidForm(FormInterface $videoForm) : JsonResponse
    {
        return new JsonResponse([
            'code' => Video::VIDEO_INVALID_FORM,
            'errors' => $this->getErrorMessages($videoForm)
        ]);
    }

    private function renameUploadedFile(UploadedFile $uploadedFile, string $directory) : string
    {
        $newFileName = uniqid(more_entropy: true) . ".{$uploadedFile->guessExtension()}";
        $uploadedFile->move($directory, $newFileName);

        return $newFileName;
    }


    private function getErrorMessages(FormInterface $form): array
    {
        $errors = [];

        foreach ($form->getErrors() as $error) {
            $errors[] = $error->getMessage();
        }

        foreach ($form->all() as $child) {
            if (!$child->isValid()) {
                $errors[$child->getName()] = $this->getErrorMessages($child);
            }
        }

        return $errors;
    }
}